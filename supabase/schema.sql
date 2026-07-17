-- Supabase Schema and RLS Policies for CRM & Kanban Dashboard

-- 1. Tasks Table
CREATE TABLE IF NOT EXISTS public.tasks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT NOT NULL CHECK (status IN ('backlog', 'in_progress', 'validation', 'done')) DEFAULT 'backlog',
    priority TEXT CHECK (priority IN ('Low', 'Normal', 'Urgent')) DEFAULT 'Normal',
    due_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Contacts Table
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    company TEXT,
    role TEXT,
    status TEXT CHECK (status IN ('Active', 'Lead', 'Inactive')) DEFAULT 'Lead',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Audit Logs Table
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    event_type TEXT NOT NULL,
    action TEXT NOT NULL,
    user_id UUID, -- Can be linked to auth.users if auth is implemented
    details JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Setup Row Level Security (RLS)

-- Enable RLS on all tables
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Note: For a true production app, you would tie these to auth.uid(). 
-- Since this is a PoC and we might not have full Auth setup immediately,
-- we can allow anonymous access for demonstration, OR enforce authentication.
-- Let's create permissive policies for now so the API works during development.
-- (WARNING: Update these policies before production!)

CREATE POLICY "Enable all access for anonymous users" ON public.tasks FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all access for anonymous users" ON public.contacts FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all access for anonymous users" ON public.audit_logs FOR ALL USING (true) WITH CHECK (true);

-- Trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_tasks_modtime BEFORE UPDATE ON public.tasks FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_contacts_modtime BEFORE UPDATE ON public.contacts FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
