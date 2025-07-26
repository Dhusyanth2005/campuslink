import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import HomePage from './pages/HomePage';
import StudentDashboard from './pages/StudentDashboardPage';
import LoginPage from './pages/LoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AnnouncementPostPage from './pages/AnnouncementPostPage';
import ChatBot from './components/Home/ChatBot';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/student-dashboard" element={<StudentDashboard/>} />
          <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
          <Route path="/announcements" element={<AnnouncementPostPage />} />
          <Route path="/login"  element={<LoginPage/>}/>
        </Routes>
        <ChatBot/>
      </div>

    </Router>
  );
}

export default App;
