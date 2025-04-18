'use client';

import { useParams } from 'next/navigation';
import { useProduct } from '@/hooks/useProduct';
import { useCart } from '@/hooks/useCart';
import React from 'react';

const ProductDetailsPage = () => {
  const params = useParams();
  const id = params?.id as string;

  const { data: product, isLoading, error } = useProduct(id);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!product) return;

 

    addToCart({ ...product, quantity: 1 });
  };

  if (isLoading) return <p className="text-center mt-10">Loading product details...</p>;
  if (error) return <p className="text-center mt-10">Error loading product details.</p>;
  if (!product) return <p className="text-center mt-10">Product not found.</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0">
          <img
            src={product.imageUrl || '/images/default.jpg'}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-lg object-contain"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl text-red-600 font-semibold">
            ₹{product.price.toFixed(2)}
          </p>
          <p className="text-gray-500 mt-2">Stock: {product.stock}</p>
          <p className="text-gray-500 mt-2">Category: {product.category}</p>
          <p className="text-gray-500 mt-2">Rating: {product.rating}</p>

          <button
            className="mt-6 bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-600 transition disabled:opacity-50"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            {product?.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
