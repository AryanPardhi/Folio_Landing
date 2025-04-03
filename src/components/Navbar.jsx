import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Laptop } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Services', to: 'services' },
    { title: 'Portfolio', to: 'portfolio' },
    { title: 'Pricing', to: 'pricing' },
    { title: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="fixed w-full bg-gray-900 dark:bg-gray-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="hero" smooth={true} className="flex items-center cursor-pointer">
              <Laptop className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold text-white">TechPro</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.to}
                  smooth={true}
                  className="text-gray-300 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-200"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 dark:bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                smooth={true}
                className="text-gray-300 hover:text-purple-500 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;