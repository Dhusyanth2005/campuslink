import React, { useState, useMemo } from 'react';
import { Home, Users, MessageSquare, Megaphone, Settings, Menu } from 'lucide-react';
import Sidebar from '../components/AdminDashboard/Sidebar';
import DashboardSection from '../components/AdminDashboard/DashboardSecton';
import AnnouncementsSection from '../components/AdminDashboard/AnnouncementsSection';
import ComplaintsSection from '../components/AdminDashboard/ComplaintsSection';
import UsersSection from '../components/AdminDashboard/UserSection';
import SettingsSection from '../components/AdminDashboard/SettingsSection';

const AdminDashboardPage = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Announcements State
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      category: 'Event',
      title: 'Annual Tech Fest 2025 Registration Open',
      content: 'Join us for the biggest technical festival of the year! Registration is now open for all competitions including coding contests, robotics, and project exhibitions. Early bird registration ends on August 15th.',
      date: '2025-07-25T10:00:00Z',
      venue: 'Main Auditorium',
      time: '9:00 AM - 6:00 PM',
      participants: '500+ expected',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=300&fit=crop',
      registerLink: 'https://techfest2025.com/register',
      author: 'Admin'
    },
    {
      id: 2,
      category: 'Exam',
      title: 'Mid-Semester Examination Schedule Released',
      content: 'The mid-semester examination timetable has been published. Please check your respective department notice boards and download the schedule from the student portal.',
      date: '2025-07-25T05:00:00Z',
      time: 'Various timings',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=300&fit=crop',
      author: 'Admin'
    },
    {
      id: 3,
      category: 'Holiday',
      title: 'Independence Day Holiday Notice',
      content: 'The college will remain closed on August 15th, 2025 in observance of Independence Day. All classes and administrative work will resume on August 16th.',
      date: '2025-07-24T09:00:00Z',
      time: '8:00 AM - Flag Hoisting',
      image: 'https://images.unsplash.com/photo-1605606977696-7c36de5e78e2?w=600&h=300&fit=crop',
      author: 'Admin'
    }
  ]);

  const [showAnnouncementForm, setShowAnnouncementForm] = useState(false);
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);
  const [announcementForm, setAnnouncementForm] = useState({
    title: '',
    content: '',
    category: 'General',
    venue: '',
    time: '',
    participants: '',
    image: null,
    registerLink: ''
  });

  // Complaints State
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      title: 'Water Supply Issue',
      category: 'Water',
      description: 'No water supply in Room 201 since morning',
      priority: 'High',
      status: 'In Progress',
      date: '2025-07-23',
      room: 'H-201',
      assignedTo: 'Maintenance Team A',
      studentName: 'John Doe',
      studentId: 'CS2021001',
      contact: 'john@student.edu'
    },
    {
      id: 2,
      title: 'Electricity Problem',
      category: 'Electricity',
      description: 'Frequent power cuts in Block B',
      priority: 'Medium',
      status: 'Pending',
      date: '2025-07-22',
      room: 'H-B',
      assignedTo: 'Electrical Team',
      studentName: 'Jane Smith',
      studentId: 'CS2021002',
      contact: 'jane@student.edu'
    },
    {
      id: 3,
      title: 'Cleaning Issue',
      category: 'Cleaning',
      description: 'Common area not cleaned for 3 days',
      priority: 'Low',
      status: 'Resolved',
      date: '2025-07-21',
      room: 'H-301',
      assignedTo: 'Housekeeping',
      studentName: 'Mike Johnson',
      studentId: 'CS2021003',
      contact: 'mike@student.edu'
    }
  ]);

  // Users State
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@student.edu',
      studentId: 'CS2021001',
      department: 'Computer Science',
      year: '3rd Year',
      role: 'Student',
      status: 'Active',
      joinDate: '2021-08-15',
      lastLogin: '2025-07-25T08:30:00Z',
      phone: '+91 9876543210',
      accommodation: 'Hosteller',
      image: ''
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@student.edu',
      studentId: 'CS2021002',
      department: 'Computer Science',
      year: '3rd Year',
      role: 'Student',
      status: 'Active',
      joinDate: '2021-08-15',
      lastLogin: '2025-07-24T15:45:00Z',
      phone: '+91 9876543211',
      accommodation: 'Dayscholar',
      image: ''
    },
    {
      id: 3,
      name: 'Dr. Sarah Wilson',
      email: 'sarah@admin.edu',
      department: 'Computer Science',
      role: 'Admin',
      status: 'Active',
      joinDate: '2020-06-01',
      lastLogin: '2025-07-25T09:15:00Z',
      phone: '+91 9876543212',
      accommodation: '',
      image: ''
    }
  ]);

  const [showUserForm, setShowUserForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [userForm, setUserForm] = useState({
    name: '',
    email: '',
    studentId: '',
    department: 'Computer Science',
    year: '1st Year',
    role: 'Student',
    phone: '',
    accommodation: 'Dayscholar',
    image: ''
  });

  const [userFilter, setUserFilter] = useState({ role: 'all', accommodation: 'all', department: 'all' });

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'announcements', label: 'Announcements', icon: Megaphone },
    { id: 'complaints', label: 'Complaints', icon: MessageSquare },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const categories = ['General', 'Event', 'Exam', 'Holiday', 'Hackathon', 'Internship', 'Tech News'];
  const complaintCategories = ['Water', 'Electricity', 'Cleaning', 'Maintenance', 'Internet', 'Security', 'Other'];
  const departments = ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Chemical'];
  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

  // Stats calculations
  const stats = useMemo(() => {
    const totalAnnouncements = announcements.length;
    const totalComplaints = complaints.length;
    const pendingComplaints = complaints.filter(c => c.status === 'Pending').length;
    const resolvedComplaints = complaints.filter(c => c.status === 'Resolved').length;
    const totalUsers = users.length;
    const activeUsers = users.filter(u => u.status === 'Active').length;

    return {
      totalAnnouncements,
      totalComplaints,
      pendingComplaints,
      resolvedComplaints,
      totalUsers,
      activeUsers
    };
  }, [announcements, complaints, users]);

  // Filtered users
  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      return (userFilter.role === 'all' || user.role === userFilter.role) &&
             (userFilter.accommodation === 'all' || user.accommodation === userFilter.accommodation) &&
             (userFilter.department === 'all' || user.department === userFilter.department);
    });
  }, [users, userFilter]);

  // Handlers
  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        menuItems={menuItems}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-600 hover:text-gray-800"
          >
            <Menu size={24} />
          </button>
        </div>

        <main className="flex-1 overflow-y-auto p-6">
          {activeSection === 'dashboard' && (
            <DashboardSection
              announcements={announcements}
              complaints={complaints}
              stats={stats}
              setActiveSection={setActiveSection}
              getStatusColor={getStatusColor}
              formatDate={formatDate}
            />
          )}
          {activeSection === 'announcements' && (
            <AnnouncementsSection
              announcements={announcements}
              setAnnouncements={setAnnouncements}
              showAnnouncementForm={showAnnouncementForm}
              setShowAnnouncementForm={setShowAnnouncementForm}
              editingAnnouncement={editingAnnouncement}
              setEditingAnnouncement={setEditingAnnouncement}
              announcementForm={announcementForm}
              setAnnouncementForm={setAnnouncementForm}
              categories={categories}
              getStatusColor={getStatusColor}
              formatDate={formatDate}
            />
          )}
          {activeSection === 'complaints' && (
            <ComplaintsSection
              complaints={complaints}
              setComplaints={setComplaints}
              getStatusColor={getStatusColor}
              getPriorityColor={getPriorityColor}
              formatDate={formatDate}
            />
          )}
          {activeSection === 'users' && (
            <UsersSection
              users={users}
              setUsers={setUsers}
              showUserForm={showUserForm}
              setShowUserForm={setShowUserForm}
              editingUser={editingUser}
              setEditingUser={setEditingUser}
              userForm={userForm}
              setUserForm={setUserForm}
              userFilter={userFilter}
              setUserFilter={setUserFilter}
              filteredUsers={filteredUsers}
              departments={departments}
              years={years}
              getStatusColor={getStatusColor}
              formatDate={formatDate}
            />
          )}
          {activeSection === 'settings' && (
            <SettingsSection />
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardPage;