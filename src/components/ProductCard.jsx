import React, { useState } from 'react';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-xs text-gray-400">({count})</span>
    </div>
  );
}

function ProductCard({ product }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const categoryColors = {
    "men's clothing": 'bg-blue-100 text-blue-700',
    "women's clothing": 'bg-pink-100 text-pink-700',
    'jewelery': 'bg-yellow-100 text-yellow-700',
    'electronics': 'bg-purple-100 text-purple-700',
  };

  const badgeClass = categoryColors[product.category] || 'bg-gray-100 text-gray-600';

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1800);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden group hover:shadow-md transition-shadow duration-300">
      <div className="relative bg-gray-50 p-6 flex items-center justify-center h-52">
        <img src={product.thumbnail || product.image} alt={product.title} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" />
        <button onClick={() => setWishlisted(!wishlisted)} className="absolute top-3 right-3 p-1.5 rounded-full bg-white shadow-sm hover:scale-110 transition-transform">
          <svg className={`w-4 h-4 transition-colors ${wishlisted ? 'text-red-500' : 'text-gray-300'}`} fill={wishlisted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col flex-1 p-4 gap-3">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full self-start capitalize ${badgeClass}`}>{product.category}</span>
        <h3 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2 flex-1">{product.title}</h3>
        <StarRating rating={product.rating?.rate ?? product.rating} count={product.rating?.count ?? 0} />
        <div className="flex items-center justify-between mt-1">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button onClick={handleAddToCart} className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${addedToCart ? 'bg-green-500 text-white scale-95' : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}>
            {addedToCart ? (
              <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Added!</>
            ) : (
              <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>Add</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;