import { supabase } from './tasksController.js';

// Get all contacts
export const getContacts = async (req, res) => {
  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

// Create a contact
export const createContact = async (req, res) => {
  const { name, email, company, role, status } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const { data, error } = await supabase
    .from('contacts')
    .insert([{ name, email, company, role, status }])
    .select()
    .single();

  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
};

// Update a contact
export const updateContact = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const { data, error } = await supabase
    .from('contacts')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

// Delete a contact
export const deleteContact = async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from('contacts')
    .delete()
    .eq('id', id);

  if (error) return res.status(500).json({ error: error.message });
  res.status(204).send();
};
