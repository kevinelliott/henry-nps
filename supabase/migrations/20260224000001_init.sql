-- henry-nps schema

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Profiles (linked to auth.users)
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  tier text not null default 'free' check (tier in ('free', 'starter', 'growth')),
  stripe_customer_id text,
  api_key text unique default 'hnps_' || replace(gen_random_uuid()::text, '-', ''),
  webhook_url text,
  digest_enabled boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Surveys
create table if not exists surveys (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references profiles(id) on delete cascade,
  name text not null,
  type text not null default 'nps' check (type in ('nps', 'csat', 'custom')),
  question text not null default 'How likely are you to recommend us to a friend or colleague?',
  followup_prompt text default 'What''s the main reason for your score?',
  token text unique not null default replace(gen_random_uuid()::text, '-', ''),
  active boolean default true,
  primary_color text default '#4f46e5',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Responses
create table if not exists responses (
  id uuid primary key default gen_random_uuid(),
  survey_id uuid not null references surveys(id) on delete cascade,
  score integer not null check (score >= 0 and score <= 10),
  comment text,
  segment text check (segment in ('promoter', 'passive', 'detractor')),
  user_agent text,
  ip_address text,
  metadata jsonb default '{}',
  created_at timestamptz default now()
);

-- RLS
alter table profiles enable row level security;
alter table surveys enable row level security;
alter table responses enable row level security;

-- Profiles: users can only see/edit their own
create policy "profiles_self" on profiles
  for all using (auth.uid() = id);

-- Surveys: owners can CRUD; responses can be read by survey owner
create policy "surveys_owner" on surveys
  for all using (auth.uid() = owner_id);

-- Responses: owner of the survey can read all responses
create policy "responses_owner_read" on responses
  for select using (
    survey_id in (select id from surveys where owner_id = auth.uid())
  );

-- Public: anyone can insert a response (via token lookup, no auth needed)
create policy "responses_public_insert" on responses
  for insert with check (true);

-- Indexes
create index if not exists surveys_owner_id_idx on surveys(owner_id);
create index if not exists surveys_token_idx on surveys(token);
create index if not exists responses_survey_id_idx on responses(survey_id);
create index if not exists responses_created_at_idx on responses(created_at desc);

-- Auto-compute segment on insert
create or replace function set_response_segment()
returns trigger as $$
begin
  if new.score >= 9 then
    new.segment := 'promoter';
  elsif new.score >= 7 then
    new.segment := 'passive';
  else
    new.segment := 'detractor';
  end if;
  return new;
end;
$$ language plpgsql;

create trigger response_segment_trigger
  before insert on responses
  for each row execute function set_response_segment();

-- Profile auto-create on signup
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();
