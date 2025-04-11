"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const mockProducts = [
      {
        _id: "1",
        seller: "jon",
        name: "Smartphone",
        description: "A high-quality smartphone with advanced features.",
        price: 12000,
        stock: 50,
        category: "Electronics",
        imageUrl: "https://th.bing.com/th/id/OIP.cAobzB0mBSlBjpBXbNRdSwHaE7?rs=1&pid=ImgDetMain",
        rating: 4.5,
        createdAt: "2023-01-01T00:00:00Z",
      },
      {
        _id: "2",
        seller: "jon",
        name: "Laptop",
        description: "A powerful laptop for gaming and productivity.",
        price: 35000,
        stock: 30,
        category: "Electronics",
        imageUrl: "https://th.bing.com/th/id/OIP.cAobzB0mBSlBjpBXbNRdSwHaE7?rs=1&pid=ImgDetMain",
        rating: 4.8,
        createdAt: "2023-02-15T00:00:00Z",
      },
      {
        _id: "3",
        seller: "jon",
        name: "T-shirt",
        description: "Comfortable cotton T-shirt in various sizes.",
        price: 500,
        stock: 100,
        category: "Fashion",
        imageUrl: "https://th.bing.com/th/id/OIP.cAobzB0mBSlBjpBXbNRdSwHaE7?rs=1&pid=ImgDetMain",
        rating: 4.0,
        createdAt: "2023-03-05T00:00:00Z",
      },
      {
        _id: "4",
        seller: "jon",
        name: "Bluetooth Speaker",
        description: "Portable Bluetooth speaker with great sound quality.",
        price: 1500,
        stock: 75,
        category: "Electronics",
        imageUrl: "https://th.bing.com/th/id/OIP.cAobzB0mBSlBjpBXbNRdSwHaE7?rs=1&pid=ImgDetMain",
        rating: 4.2,
        createdAt: "2023-04-10T00:00:00Z",
      },
      {
        _id: "5",
        seller: "jon",
        name: "Smartphone",
        description: "A high-quality smartphone with advanced features.",
        price: 12000,
        stock: 50,
        category: "Electronics",
        imageUrl: "https://th.bing.com/th/id/OIP.cAobzB0mBSlBjpBXbNRdSwHaE7?rs=1&pid=ImgDetMain",
        rating: 4.5,
        createdAt: "2023-01-01T00:00:00Z",
      },
      {
        _id: "6",
        seller: "jon",
        name: "Laptop",
        description: "A powerful laptop for gaming and productivity.",
        price: 35000,
        stock: 30,
        category: "Electronics",
        imageUrl: "https://th.bing.com/th/id/OIP.cAobzB0mBSlBjpBXbNRdSwHaE7?rs=1&pid=ImgDetMain",
        rating: 4.8,
        createdAt: "2023-02-15T00:00:00Z",
      },
      {
        _id: "7",
        seller: "jon",
        name: "T-shirt",
        description: "Comfortable cotton T-shirt in various sizes.",
        price: 500,
        stock: 100,
        category: "Fashion",
        imageUrl: "https://th.bing.com/th/id/OIP.cAobzB0mBSlBjpBXbNRdSwHaE7?rs=1&pid=ImgDetMain",
        rating: 4.0,
        createdAt: "2023-03-05T00:00:00Z",
      },
      {
        _id: "8",
        seller: "jon",
        name: "Bluetooth Speaker",
        description: "Portable Bluetooth speaker with great sound quality.",
        price: 1500,
        stock: 75,
        category: "Electronics",
        imageUrl: "https://th.bing.com/th/id/OIP.cAobzB0mBSlBjpBXbNRdSwHaE7?rs=1&pid=ImgDetMain",
        rating: 4.2,
        createdAt: "2023-04-10T00:00:00Z",
      },
      {
        _id: "9",
        seller: "jon",
        name: "Smartphone",
        description: "A high-quality smartphone with advanced features.",
        price: 12000,
        stock: 50,
        category: "Electronics",
        imageUrl: "https://th.bing.com/th/id/OIP.cAobzB0mBSlBjpBXbNRdSwHaE7?rs=1&pid=ImgDetMain",
        rating: 4.5,
        createdAt: "2023-01-01T00:00:00Z",
      },
      {
        _id: "10",
        seller: "jon",
        name: "Laptop",
        description: "A powerful laptop for gaming and productivity.",
        price: 35000,
        stock: 30,
        category: "Electronics",
        imageUrl: "https://th.bing.com/th/id/OIP.cAobzB0mBSlBjpBXbNRdSwHaE7?rs=1&pid=ImgDetMain",
        rating: 4.8,
        createdAt: "2023-02-15T00:00:00Z",
      },
      {
        _id: "11",
        seller: "jon",
        name: "T-shirt",
        description: "Comfortable cotton T-shirt in various sizes.",
        price: 500,
        stock: 100,
        category: "Fashion",
        imageUrl: "https://th.bing.com/th/id/OIP.cAobzB0mBSlBjpBXbNRdSwHaE7?rs=1&pid=ImgDetMain",
        rating: 4.0,
        createdAt: "2023-03-05T00:00:00Z",
      },
      {
        _id: "12",
        seller: "jon",
        name: "Bluetooth Speaker",
        description: "Portable Bluetooth speaker with great sound quality.",
        price: 1500,
        stock: 75,
        category: "Electronics",
        imageUrl: "https://th.bing.com/th/id/OIP.cAobzB0mBSlBjpBXbNRdSwHaE7?rs=1&pid=ImgDetMain",
        rating: 4.2,
        createdAt: "2023-04-10T00:00:00Z",
      },
    ];
    setProducts(mockProducts);
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;
    setProducts(products.filter((product) => product._id !== id));
  };

  return (
    <div className="">
        <h1 className="text-3xl font-bold text-yellow-500 mb-6 border mx-auto max-w-7xl p-5 rounded-xl">
          📦 All Products
        </h1>
      <div className="max-w-7xl overflow-x-auto max-h-[70vh] overflow-y-auto mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl border">
        <table className="min-w-full table-auto">
          <thead className="">
            <tr className="bg-yellow-500 text-white">
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Stock</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-16 h-16 border border-yellow-500 object-cover"
                  />
                </td>
                <td className="px-4 py-2">{product.stock}</td>
                <td className="px-4 py-2">{`$${product.price}`}</td>
                <td className="px-4 py-2">{product.category}</td>
                <td className="px-4 py-2">{product.rating}</td>
                <td className="px-4 py-2 flex space-x-3">
                  <Link
                    href={`/dashboard/seller/products/update/${product._id}`}
                  >
                    <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
