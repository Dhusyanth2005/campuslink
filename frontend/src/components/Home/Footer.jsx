import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-15 h-15 flex items-center justify-center relative overflow-hidden">
    
            <img src="/public/logosece.png" alt="CampusLink Logo" className="h-15 w-full" />
            
          </div>
          <div>
            <h3 className="text-lg font-bold">CampusLink</h3>
            <p className="text-sm text-gray-300">Sri Eshwar College of Engineering</p>
          </div>
        </div>
        <p className="text-gray-300 mb-2">Connecting students, empowering education</p>
        <p className="text-sm text-gray-400">© 2025 CampusLink. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
