'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useProducts } from '@/hooks/useProducts';

const Page = () => {
  const { data: products, isLoading, error } = useProducts();

  return (
    <div className='container mx-auto'>
      {/* Filter Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full my-4">
        <div className="w-full md:w-2/5">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Sort by Category
          </label>
          <select
            id="category"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
          >
            <option value="">All Category</option>
            <option value="">Bags & Wallets</option>
            <option value="">Clothes</option>
            <option value="">Perfumes & Body Mists</option>
            <option value="">Beauty & Health</option>
            <option value="">Accessories & Parts</option>
            <option value="">Footwear</option>
          </select>
        </div>

        <div className="w-full md:w-2/5">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
            Sort by Price
          </label>
          <select
            id="price"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
          >
            <option value="">Ascending Order</option>
            <option value="">Descending Order</option>
          </select>
        </div>
      </div>

      {/* Loading & Error States */}
      {isLoading && <p>Loading products...</p>}
      {error && <p>Something went wrong. Please try again later.</p>}

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products?.map((product) => (
          <Link key={product._id} href={`/all-products/${product._id}`}>
            <div className="block border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition">
              <div className="relative">
                <img
                  src={product.imageUrl[0] || '/images/default.jpg'}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="mx-auto h-40 object-contain"
                />
                {product.category && (
                  <span className="absolute top-2 left-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                )}
              </div>
              <div className="flex justify-center items-center mt-3">
                <button className="btn bg-yellow-500 text-black">Add to Cart</button>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">{product.category}</p>
                <h3 className="font-semibold text-gray-800">{product.name}</h3>
                <div className="mt-2 text-lg font-bold text-red-600">
                  ₹{product.price.toFixed(2)}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
