import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Contacts from './pages/Contacts';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Calendar from './pages/Calendar';
import Projects from './pages/Projects';
import Integration from './pages/Integration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
          <Route path="integration" element={<Integration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
