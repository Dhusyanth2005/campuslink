import React, { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Clock, Users, BookOpen, AlertCircle, Trophy, Coffee, Filter, Search, Eye } from 'lucide-react';

const AnnouncementPostPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [posts] = useState([
    {
      id: 1,
      category: 'Events',
      title: 'Annual Tech Fest 2025 Registration Open',
      content: 'Join us for the biggest technical festival of the year! Registration is now open for all competitions including coding contests, robotics, and project exhibitions. Early bird registration ends on August 15th.',
      date: '2025-07-25T10:00:00Z',
      displayDate: '2 hours ago',
      location: 'Main Auditorium',
      time: '9:00 AM - 6:00 PM',
      participants: '500+ expected',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=300&fit=crop',
      icon: Trophy,
      color: 'bg-blue-50 border-blue-200',
      textColor: 'text-blue-800'
    },
    {
      id: 2,
      category: 'Exams',
      title: 'Mid-Semester Examination Schedule Released',
      content: 'The mid-semester examination timetable has been published. Please check your respective department notice boards and download the schedule from the student portal. Make sure to carry your ID cards during exams.',
      date: '2025-07-25T05:00:00Z',
      displayDate: '5 hours ago',
      time: 'Various timings',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=300&fit=crop',
      icon: BookOpen,
      color: 'bg-orange-50 border-orange-200',
      textColor: 'text-orange-800'
    },
    {
      id: 3,
      category: 'Holiday',
      title: 'Independence Day Holiday Notice',
      content: 'The college will remain closed on August 15th, 2025 in observance of Independence Day. All classes and administrative work will resume on August 16th. The flag hoisting ceremony will be held on August 14th at 8:00 AM.',
      date: '2025-07-24T09:00:00Z',
      displayDate: '1 day ago',
      time: '8:00 AM - Flag Hoisting',
      image: 'https://images.unsplash.com/photo-1605606977696-7c36de5e78e2?w=600&h=300&fit=crop',
      icon: AlertCircle,
      color: 'bg-green-50 border-green-200',
      textColor: 'text-green-800'
    },
    {
      id: 4,
      category: 'Events',
      title: 'Guest Lecture on Artificial Intelligence',
      content: 'Distinguished speaker Dr. Rajesh Kumar from IIT Delhi will deliver a guest lecture on "Future of AI in Industry 4.0". All students from CSE, IT, and related branches are encouraged to attend.',
      date: '2025-07-23T14:00:00Z',
      displayDate: '2 days ago',
      location: 'Seminar Hall A',
      time: '2:00 PM - 4:00 PM',
      participants: '200 seats available',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop',
      icon: Users,
      color: 'bg-purple-50 border-purple-200',
      textColor: 'text-purple-800'
    },
    {
      id: 5,
      category: 'General',
      title: 'New Cafeteria Menu and Timings',
      content: 'We are excited to introduce our new cafeteria menu with healthy and delicious options. New breakfast items have been added, and the cafeteria will now open at 7:30 AM. Special combo meals available at student-friendly prices.',
      date: '2025-07-22T11:30:00Z',
      displayDate: '3 days ago',
      time: '7:30 AM - 8:00 PM',
      location: 'Main Cafeteria',
      image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=300&fit=crop',
      icon: Coffee,
      color: 'bg-yellow-50 border-yellow-200',
      textColor: 'text-yellow-800'
    },
    {
      id: 6,
      category: 'Events',
      title: 'Sports Week Registration Open',
      content: 'Annual sports week is here! Register for cricket, football, basketball, badminton, and athletics. Inter-department competitions will be held from August 20-25. Team registrations close on August 10th.',
      date: '2025-07-21T16:45:00Z',
      displayDate: '4 days ago',
      location: 'Sports Complex',
      time: '9:00 AM - 5:00 PM',
      participants: '1000+ expected',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop',
      icon: Trophy,
      color: 'bg-blue-50 border-blue-200',
      textColor: 'text-blue-800'
    },
    {
      id: 7,
      category: 'General',
      title: 'Library Extended Hours During Exams',
      content: 'The central library will extend its operating hours during the examination period. From August 1st to August 15th, the library will be open from 7:00 AM to 11:00 PM. Additional study spaces have been allocated.',
      date: '2025-07-20T08:15:00Z',
      displayDate: '5 days ago',
      time: '7:00 AM - 11:00 PM',
      location: 'Central Library',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=300&fit=crop',
      icon: BookOpen,
      color: 'bg-gray-50 border-gray-200',
      textColor: 'text-gray-800'
    },
    {
      id: 8,
      category: 'Holiday',
      title: 'Monsoon Break Schedule',
      content: 'Due to heavy rainfall predictions, classes will remain suspended from July 29th to August 2nd. Online classes will continue as per the regular schedule. Students are advised to stay safe and avoid unnecessary travel.',
      date: '2025-07-19T12:30:00Z',
      displayDate: '6 days ago',
      time: 'All Day',
      image: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&h=300&fit=crop',
      icon: AlertCircle,
      color: 'bg-green-50 border-green-200',
      textColor: 'text-green-800'
    }
  ]);

  const categories = ['All', 'Events', 'Exams', 'Holiday', 'General'];
  const dateFilters = ['All', 'Today', 'This Week', 'This Month'];

  const clearDateFilters = () => {
    setStartDate('');
    setEndDate('');
  };

  const setQuickDateFilter = (filter) => {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    
    switch(filter) {
      case 'Today':
        setStartDate(todayStr);
        setEndDate(todayStr);
        break;
      case 'This Week':
        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - today.getDay());
        setStartDate(weekStart.toISOString().split('T')[0]);
        setEndDate(todayStr);
        break;
      case 'This Month':
        const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
        setStartDate(monthStart.toISOString().split('T')[0]);
        setEndDate(todayStr);
        break;
      case 'All':
        clearDateFilters();
        break;
    }
  };

  const isDateInRange = (postDate, start, end) => {
    const date = new Date(postDate).toISOString().split('T')[0];
    const startCheck = !start || date >= start;
    const endCheck = !end || date <= end;
    return startCheck && endCheck;
  };

  const filteredPosts = posts.filter(post => {
    const categoryMatch = activeCategory === 'All' || post.category === activeCategory;
    const dateMatch = isDateInRange(post.date, startDate, endDate);
    const searchMatch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && dateMatch && searchMatch;
  });

  const getCategoryColor = (category) => {
    const colors = {
      'Events': 'bg-blue-100 text-blue-800',
      'Exams': 'bg-orange-100 text-orange-800',
      'Holiday': 'bg-green-100 text-green-800',
      'General': 'bg-gray-100 text-gray-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const formatFullDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <button 
                  onClick={() => window.history.back()} 
                  className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
                  title="Go Back"
                >
                  <ArrowLeft className="h-6 w-6 text-blue-600" />
                </button>
                <h1 className="text-3xl font-bold text-gray-900">Campus Announcements</h1>
              </div>
              <p className="text-gray-600 text-lg">Stay updated with the latest news, events, and important notices from Sri Eshwar College of Engineering</p>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6 lg:mt-0">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white text-center">
                <div className="text-2xl font-bold">{posts.length}</div>
                <div className="text-sm opacity-90">Total Posts</div>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white text-center">
                <div className="text-2xl font-bold">{filteredPosts.length}</div>
                <div className="text-sm opacity-90">Showing</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search announcements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                      activeCategory === category
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Date Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Date Range</label>
              <div className="flex flex-wrap gap-2 mb-3">
                {dateFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setQuickDateFilter(filter)}
                    className="px-3 py-2 text-sm rounded-lg font-medium transition-all duration-200 bg-gray-100 text-gray-600 hover:bg-gray-200"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* View Toggle */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">View Mode</label>
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                    viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                    viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">
                {filteredPosts.length} announcement{filteredPosts.length !== 1 ? 's' : ''}
              </span>
              {(activeCategory !== 'All' || searchQuery || startDate || endDate) && (
                <button
                  onClick={() => {
                    setActiveCategory('All');
                    setSearchQuery('');
                    clearDateFilters();
                  }}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear all filters
                </button>
              )}
            </div>
            <div className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>

        {/* Posts Grid/List */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
            <AlertCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No announcements found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search terms or filters to see more results.</p>
            <button 
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
                clearDateFilters();
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredPosts.map((post) => {
              const IconComponent = post.icon;
              return (
                <div 
                  key={post.id} 
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Image Section */}
                  {post.image && (
                    <div className="relative overflow-hidden h-48">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Content Section */}
                  <div className="p-6">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2" title={formatFullDate(post.date)}>
                        {post.displayDate}
                      </div>
                    </div>

                    {/* Title and Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {post.content}
                    </p>

                    {/* Details */}
                    <div className="space-y-2 mb-4">
                      {post.time && (
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>{post.time}</span>
                        </div>
                      )}
                      {post.location && (
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span>{post.location}</span>
                        </div>
                      )}
                      {post.participants && (
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Users className="h-4 w-4" />
                          <span>{post.participants}</span>
                        </div>
                      )}
                    </div>

                    {/* Register Button for Events */}
                    {post.category === 'Events' && (
                      <div className="pt-4 border-t border-gray-100">
                        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all">
                          Register Now
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredPosts.map((post) => {
              const IconComponent = post.icon;
              return (
                <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  {/* Post Header */}
                  <div className="p-4 flex items-center justify-between">
                    <p className="text-xs text-gray-500" title={formatFullDate(post.date)}>
                      {post.displayDate}
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="px-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{post.content}</p>
                  </div>

                  {/* Post Image */}
                  {post.image && (
                    <div className="mt-3 mx-4">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  )}

                  {/* Post Details */}
                  <div className="px-4 mt-3 pb-2">
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      {post.time && (
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.time}</span>
                        </div>
                      )}
                      {post.location && (
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{post.location}</span>
                        </div>
                      )}
                      {post.participants && (
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{post.participants}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Register Button for Events */}
                  {post.category === 'Events' && (
                    <div className="px-4 py-3 border-t border-gray-100">
                      <div className="flex justify-end">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                          Register Now
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnnouncementPostPage;