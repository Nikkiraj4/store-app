import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">ShopZone</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-500">
  <button className="hover:text-indigo-600 transition-colors">Home</button>
  <button className="hover:text-indigo-600 transition-colors">Categories</button>
  <button className="hover:text-indigo-600 transition-colors">Deals</button>
</nav>
        <div className="flex items-center gap-3">
          <button className="p-2 text-gray-500 hover:text-indigo-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button className="relative p-2 text-gray-500 hover:text-indigo-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;