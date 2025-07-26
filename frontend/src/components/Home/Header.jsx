import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/public/logosece.png" alt="CampusLink Logo" className="h-15 w-12" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">CampusLink</h1>
              <p className="text-xs text-gray-600">Sri Eshwar College of Engineering</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Features</a>
            <a href="/announcements" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Announcements</a>
            <a href="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Dashboard</a>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Login
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">Features</a>
              <a href="/announcements" className="text-gray-700 hover:text-blue-600 font-medium">Announcements</a>
              <a href="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium">Dashboard</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-xl font-medium">
                  Login
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;