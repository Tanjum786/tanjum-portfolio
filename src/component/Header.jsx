import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const HeaderNavigation = ({ currentPage, setCurrentPage }) => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleNavClick = (page) => {
    console.log('Navigation clicked:', page); // Debug line
    if (setCurrentPage) {
      setCurrentPage(page);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-xl border-b ${isDark
      ? 'bg-gray-900/80 border-gray-700/50'
      : 'bg-white/80 border-gray-200/50'
      }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark
                ? 'bg-gradient-to-br from-purple-500 to-blue-600'
                : 'bg-gradient-to-br from-purple-600 to-blue-700'
                }`}>
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full animate-ping ${isDark ? 'bg-cyan-400' : 'bg-green-500'
                }`}></div>
            </div>
            <span className={`text-xl font-bold ${isDark
              ? 'bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'
              }`}>
              CyberDev
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 group relative ${isDark
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/70'
                  }`}
              >
                {item.name}
                <div className={`absolute inset-x-1 bottom-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${isDark
                  ? 'bg-gradient-to-r from-purple-400 to-blue-400'
                  : 'bg-gradient-to-r from-purple-600 to-blue-600'
                  }`}></div>
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-3 rounded-lg transition-all duration-300 group ${isDark
                ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                }`}
            >
              {isDark ? (
                <Sun className="group-hover:rotate-180 transition-transform duration-500" size={18} />
              ) : (
                <Moon className="group-hover:-rotate-12 transition-transform duration-300" size={18} />
              )}
            </button>
            <a
              href="/contact"
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${isDark
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                }`}>
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${isDark ? 'text-white' : 'text-gray-900'
              }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden backdrop-blur-xl border-t ${isDark
          ? 'bg-gray-900/95 border-gray-700/50'
          : 'bg-white/95 border-gray-200/50'
          }`}>
          <div className="px-6 py-6 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${isDark
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
              >
                {item.name}
              </a>
            ))}
            <div className={`flex items-center space-x-3 pt-4 border-t ${isDark ? 'border-gray-700/50' : 'border-gray-200'
              }`}>
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-3 rounded-lg ${isDark
                  ? 'bg-gray-800 text-yellow-400'
                  : 'bg-gray-100 text-gray-600'
                  }`}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold text-center">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default HeaderNavigation;