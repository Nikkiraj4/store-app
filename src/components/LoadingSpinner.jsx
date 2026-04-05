import React from 'react';

function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-indigo-100"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-600 animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-indigo-300 animate-spin" style={{ animationDuration: '0.6s', animationDirection: 'reverse' }}></div>
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold text-indigo-700">Loading products</p>
        <p className="text-sm text-gray-400 mt-1">Fetching from store...</p>
      </div>
      <div className="flex gap-3 mt-2 opacity-40">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-24 h-32 bg-gray-200 rounded-xl animate-pulse"></div>
        ))}
      </div>
    </div>
  );
}

export default LoadingSpinner;