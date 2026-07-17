import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import tasksRouter from './routes/tasks.js';
import contactsRouter from './routes/contacts.js';
import auditLogsRouter from './routes/auditLogs.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Supabase client initialization
// We expect SUPABASE_URL and SUPABASE_ANON_KEY in .env
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

app.use('/api/tasks', tasksRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api/audit-logs', auditLogsRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
