import { supabase } from './tasksController.js';

// Get all audit logs
export const getAuditLogs = async (req, res) => {
  const { data, error } = await supabase
    .from('audit_logs')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

// Create an audit log entry
export const createAuditLog = async (req, res) => {
  const { event_type, action, details } = req.body;
  
  if (!event_type || !action) {
    return res.status(400).json({ error: 'Event type and action are required' });
  }

  const { data, error } = await supabase
    .from('audit_logs')
    .insert([{ event_type, action, details }])
    .select()
    .single();

  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
};
