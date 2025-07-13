'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, Upload, Shield } from 'lucide-react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    {
      href: '/',
      label: 'Search Hospitals',
      icon: Home,
      description: 'Find and compare hospitals'
    },
    {
      href: '/submit-rates',
      label: 'Submit Room Rates',
      icon: Upload,
      description: 'Share hospital room rates'
    },
    {
      href: '/admin',
      label: 'Admin Dashboard',
      icon: Shield,
      description: 'Manage submissions'
    }
  ];

  const isActive = (href) => pathname === href;

  return (
    <div className="md:hidden">
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        {isOpen ? (
          <X className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="block h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Background overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-25" 
            onClick={closeMenu}
          />
          
          {/* Menu panel */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-sm bg-white shadow-xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation items */}
              <nav className="flex-1 px-4 py-6 space-y-1">
                {menuItems.map((item) => {
                  const IconComponent = item.icon;
                  const active = isActive(item.href);
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`group flex items-center px-3 py-3 text-base font-medium rounded-lg transition-colors ${
                        active
                          ? 'bg-blue-50 text-blue-700 border-blue-200'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <IconComponent 
                        className={`mr-3 h-5 w-5 ${
                          active ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                        }`}
                      />
                      <div className="flex-1">
                        <div className={`text-sm font-medium ${active ? 'text-blue-700' : 'text-gray-900'}`}>
                          {item.label}
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.description}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </nav>

              {/* Footer */}
              <div className="p-4 border-t border-gray-200">
                <div className="text-xs text-gray-500 text-center">
                  PH Hospital Search
                  <br />
                  Your trusted healthcare resource
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
