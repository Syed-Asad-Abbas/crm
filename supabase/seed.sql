-- Seed Mock Data for CRM & Kanban Dashboard

-- Seed Tasks
INSERT INTO public.tasks (title, description, status, priority, due_date) VALUES
('New microdose website', 'Redesign the homepage', 'backlog', 'Urgent', '2024-07-29'),
('Input Styleguide', 'Create component library', 'backlog', 'Normal', '2024-06-02'),
('Sales deck', 'Marketing materials', 'in_progress', 'Low', '2024-09-19'),
('Case studies', 'Fin Tech work', 'validation', 'Urgent', '2024-09-21'),
('Demo reel', 'Animation 2nd', 'validation', 'Normal', '2024-08-02'),
('Spline animated logo', 'Logo for website', 'done', 'Low', '2024-07-13');

-- Seed Contacts
INSERT INTO public.contacts (name, email, company, role, status) VALUES
('Kamil Bachanek', 'kamil@microdose.studio', 'Microdose', 'Lead Designer', 'Active'),
('John Doe', 'john@example.com', 'Acme Corp', 'CEO', 'Lead'),
('Jane Smith', 'jane@example.com', 'Tech Flow', 'Marketing Director', 'Active'),
('Mike Johnson', 'mike@startup.io', 'Startup IO', 'CTO', 'Inactive');

-- Seed Audit Logs
INSERT INTO public.audit_logs (event_type, action, details) VALUES
('AUTH', 'User Login', '{"ip": "192.168.1.1", "browser": "Chrome"}'),
('TASK', 'Task Created', '{"task_title": "New microdose website"}'),
('TASK', 'Status Changed', '{"task_title": "Sales deck", "old_status": "backlog", "new_status": "in_progress"}');
