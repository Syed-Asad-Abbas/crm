import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_ANON_KEY || '';
export const supabase = createClient(supabaseUrl, supabaseKey);

// Get all tasks
export const getTasks = async (req, res) => {
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

// Create a task
export const createTask = async (req, res) => {
  const { title, description, status, priority, due_date } = req.body;
  
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const { data, error } = await supabase
    .from('tasks')
    .insert([{ title, description, status, priority, due_date }])
    .select()
    .single();

  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
};

// Update a task (specifically for drag-and-drop status changes)
export const updateTask = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const { data, error } = await supabase
    .from('tasks')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

// Delete a task
export const deleteTask = async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', id);

  if (error) return res.status(500).json({ error: error.message });
  res.status(204).send();
};
