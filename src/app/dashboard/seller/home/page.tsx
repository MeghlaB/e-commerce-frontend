'use client';

import { useRouter } from 'next/navigation';

const SellerHome = () => {
    const totalSales = 460;
    const totalProducts = 40;
    const totalOrders = 40;
    const sellerName = "arijit";

  const router = useRouter();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Welcome back, {sellerName} 👋
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-yellow-50 shadow-md rounded-2xl p-4">
          <h2 className="text-lg font-semibold text-gray-600">Total Sales</h2>
          <p className="text-2xl font-bold text-blue-600">$ {totalSales}</p>
        </div>
        <div className="bg-yellow-50 shadow-md rounded-2xl p-4">
          <h2 className="text-lg font-semibold text-gray-600">Total Products</h2>
          <p className="text-2xl font-bold text-green-600">{totalProducts}</p>
        </div>
        <div className="bg-yellow-50 shadow-md rounded-2xl p-4">
          <h2 className="text-lg font-semibold text-gray-600">Total Orders</h2>
          <p className="text-2xl font-bold text-red-600">{totalOrders}</p>
        </div>
      </div>
      <div className=" border my-10">
        charts goes here
      </div>
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => router.push('/dashboard/seller/add-product')}
          className="bg-blue-600 text-white px-5 py-3 rounded-xl shadow hover:bg-blue-700 transition"
        >
          ➕ Add Product
        </button>
        <button
          onClick={() => router.push('/dashboard/seller/products')}
          className="bg-green-600 text-white px-5 py-3 rounded-xl shadow hover:bg-green-700 transition"
        >
          📃 View Products
        </button>
        <button
          onClick={() => router.push('/dashboard/seller/orders')}
          className="bg-red-600 text-white px-5 py-3 rounded-xl shadow hover:bg-red-700 transition"
        >
          📑 View Orders
        </button>
      </div>
    </div>
  );
};

export default SellerHome;
