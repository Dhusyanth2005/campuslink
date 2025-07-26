import React from 'react';
import { Star, ArrowRight, Play, AlertCircle, CheckCircle, Calendar, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative py-20 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 h-2 w-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 h-1 w-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
      <div className="absolute bottom-32 left-20 h-3 w-3 bg-amber-400 rounded-full animate-bounce opacity-50"></div>
      <div className="absolute bottom-20 right-40 h-1.5 w-1.5 bg-indigo-400 rounded-full animate-pulse opacity-70"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Enhanced */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                <Star className="h-4 w-4 mr-2" />
                Trusted by 2,500+ Students
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Campus,
                <span className="bg-gradient-to-r from-blue-600 to-amber-500 text-transparent bg-clip-text"> Connected</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                CampusLink streamlines student life at Sri Eshwar College of Engineering. From announcements to skill sharing, everything you need in one beautiful platform.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                Launch Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-300 hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                Announcements
              </button>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 pt-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                NLP Analysis
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-200">
                <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                Smart Categories
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200">
                <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
                Query Chatbot
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium border border-amber-200">
                <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                Real-time Updates
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced with Floating Animation */}
          <div className="relative">
            {/* Main Floating Container */}
            <div className="relative z-10 animate-float">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Browser Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-3 w-3 bg-white/30 rounded-full"></div>
                    <div className="h-3 w-3 bg-white/30 rounded-full"></div>
                    <div className="h-3 w-3 bg-white/30 rounded-full"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Notification Items with Staggered Animation */}
                  <div className="flex items-center space-x-3 animate-slideInLeft">
                    <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <AlertCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 animate-slideInLeft delay-200">
                    <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                      <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 animate-slideInLeft delay-400">
                    <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-gray-200 rounded w-4/5 mb-2"></div>
                      <div className="h-2 bg-gray-100 rounded w-1/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Background Blurs with Animation */}
            <div className="absolute -top-4 -right-4 h-72 w-72 bg-gradient-to-br from-blue-400 to-amber-400 rounded-full opacity-20 blur-3xl animate-floatReverse"></div>
            <div className="absolute -bottom-4 -left-4 h-72 w-72 bg-gradient-to-br from-amber-400 to-blue-400 rounded-full opacity-20 blur-3xl animate-float delay-1000"></div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(8px) rotate(-1deg); }
          66% { transform: translateY(4px) rotate(1deg); }
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        
        @keyframes slideInLeft {
          0% { transform: translateX(-50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-floatReverse {
          animation: floatReverse 8s ease-in-out infinite;
        }
        
        .animate-floatSlow {
          animation: floatSlow 10s ease-in-out infinite;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  );
};

export default Hero;