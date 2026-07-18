# RelateWise CRM & Kanban Dashboard

A full-stack, modern Customer Relationship Management (CRM) platform and Kanban dashboard built to track tasks, manage contacts, and analyze real-time metrics.

## 🚀 Tech Stack

**Frontend:**
- React (Vite)
- React Router DOM
- Recharts (for Analytics)
- Lucide React (for UI Icons)
- Vanilla CSS with a custom Glassmorphism/Modern UI Design System

**Backend:**
- Node.js & Express
- Supabase (PostgreSQL Database & Auth)
- CORS & Dotenv

## ✨ Key Features

- **Pivora Style Dashboard**: Dynamic metric widgets, Revenue bar charts, calendar events, and lead management tracking.
- **Kanban Board**: Drag-and-drop task management divided into Backlog, In Progress, Validation, and Done.
- **Contacts Directory**: Robust contacts data table with status badge indicators and dynamic sparklines.
- **Analytics Hub**: Interactive visualizations for sales performance, order distribution, and recent orders using Recharts.
- **Project Proposals**: Grid-based proposal tracking system categorized by status.
- **Integrations Hub**: Connection portal for external real estate and CRM tools (HubSpot, Zendesk, Pipedrive, etc.).
- **User Settings**: Comprehensive profile management, notification toggles, and appearance configurations.

## 🛠️ Setup & Installation

### 1. Supabase Setup
- Create a new project on [Supabase](https://supabase.com/).
- Run the SQL queries found in `/supabase/schema.sql` and `/supabase/seed.sql` in your Supabase SQL Editor to generate your tables and mock data.
- Obtain your **Project URL** and **Anon Key** from the Supabase API Settings.

### 2. Backend Initialization
```bash
cd backend
npm install
```
- Rename `.env.example` to `.env` and fill in your Supabase credentials and PORT.
- Start the server:
```bash
npm run dev
```

### 3. Frontend Initialization
```bash
cd frontend
npm install
```
- Start the Vite development server:
```bash
npm run dev
```

The application will now be running concurrently. Navigate to your frontend local server (usually `http://localhost:5173`) to view the application!
