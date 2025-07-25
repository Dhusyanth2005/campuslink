import React from 'react';
import { Plus, Edit, Trash2, Calendar, MapPin, Clock, X, Link } from 'lucide-react';

const AnnouncementsSection = ({
  announcements,
  setAnnouncements,
  showAnnouncementForm,
  setShowAnnouncementForm,
  editingAnnouncement,
  setEditingAnnouncement,
  announcementForm,
  setAnnouncementForm,
  categories,
  getStatusColor,
  formatDate,
}) => {
  const handleAnnouncementSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newImage = formData.get('image');
    
    if (editingAnnouncement) {
      setAnnouncements(announcements.map(a => 
        a.id === editingAnnouncement.id 
          ? { 
              ...announcementForm, 
              id: editingAnnouncement.id, 
              date: editingAnnouncement.date, 
              author: 'Admin',
              image: newImage ? URL.createObjectURL(newImage) : announcementForm.image
            }
          : a
      ));
      setEditingAnnouncement(null);
    } else {
      const newAnnouncement = {
        id: Date.now(),
        ...announcementForm,
        date: new Date().toISOString(),
        author: 'Admin',
        image: newImage ? URL.createObjectURL(newImage) : ''
      };
      setAnnouncements([newAnnouncement, ...announcements]);
    }
    setAnnouncementForm({
      title: '',
      content: '',
      category: 'General',
      venue: '',
      time: '',
      participants: '',
      image: null,
      registerLink: ''
    });
    setShowAnnouncementForm(false);
  };

  const editAnnouncement = (announcement) => {
    setAnnouncementForm(announcement);
    setEditingAnnouncement(announcement);
    setShowAnnouncementForm(true);
  };

  const deleteAnnouncement = (id) => {
    setAnnouncements(announcements.filter(a => a.id !== id));
  };

  const showRegisterLink = ['Event', 'Hackathon', 'Internship'].includes(announcementForm.category);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Announcements Management</h2>
          <p className="text-gray-600">Create and manage campus announcements</p>
        </div>
        <button
          onClick={() => setShowAnnouncementForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
        >
          <Plus size={20} className="mr-2" />
          New Announcement
        </button>
      </div>

      {showAnnouncementForm && (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(134, 133, 133, 0.25), rgba(100, 100, 100, 0.05))',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            zIndex: 100, // Increased z-index to ensure modal is above sidebar
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}>
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">
                  {editingAnnouncement ? 'Edit Announcement' : 'Create New Announcement'}
                </h3>
                <button
                  onClick={() => {
                    setShowAnnouncementForm(false);
                    setEditingAnnouncement(null);
                    setAnnouncementForm({
                      title: '',
                      content: '',
                      category: 'General',
                      venue: '',
                      time: '',
                      participants: '',
                      image: null,
                      registerLink: ''
                    });
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              
              <form onSubmit={handleAnnouncementSubmit} className="space-y-4" encType="multipart/form-data">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={announcementForm.title}
                    onChange={(e) => setAnnouncementForm({...announcementForm, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                  <textarea
                    value={announcementForm.content}
                    onChange={(e) => setAnnouncementForm({...announcementForm, content: e.target.value})}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    value={announcementForm.category}
                    onChange={(e) => setAnnouncementForm({...announcementForm, category: e.target.value, registerLink: ''})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Venue (Optional)</label>
                    <input
                      type="text"
                      value={announcementForm.venue}
                      onChange={(e) => setAnnouncementForm({...announcementForm, venue: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Time (Optional)</label>
                    <input
                      type="text"
                      value={announcementForm.time}
                      onChange={(e) => setAnnouncementForm({...announcementForm, time: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                {showRegisterLink && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Register Link (Optional)</label>
                    <input
                      type="url"
                      value={announcementForm.registerLink}
                      onChange={(e) => setAnnouncementForm({...announcementForm, registerLink: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image (Optional)</label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={(e) => setAnnouncementForm({...announcementForm, image: e.target.files[0]})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowAnnouncementForm(false);
                      setEditingAnnouncement(null);
                    }}
                    className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {editingAnnouncement ? 'Update' : 'Create'} Announcement
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{announcement.title}</h3>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                    {announcement.category}
                  </span>
                </div>
                <p className="text-gray-700 mb-3">{announcement.content}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {formatDate(announcement.date)}
                  </span>
                  {announcement.venue && (
                    <span className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {announcement.venue}
                    </span>
                  )}
                  {announcement.time && (
                    <span className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {announcement.time}
                    </span>
                  )}
                  {announcement.registerLink && (
                    <span className="flex items-center">
                      <Link size={16} className="mr-1" />
                      <a href={announcement.registerLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Register
                      </a>
                    </span>
                  )}
                </div>
              </div>
              <div className="flex space-x-2 ml-4">
                <button
                  onClick={() => editAnnouncement(announcement)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => deleteAnnouncement(announcement.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            {announcement.image && (
              <img 
                src={announcement.image} 
                alt={announcement.title}
                className="w-full h-48 object-cover rounded-lg mt-4"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsSection;