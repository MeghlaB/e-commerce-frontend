"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthProvider";
import { useUserRole } from "@/hooks/useUserRole";

const CreateProduct = () => {
  const { user, loading } = useAuth();
  const { role, userId, isLoading } = useUserRole(user?.email);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
      imageUrl: [formData.imageUrl],
      seller: userId,
    };
    console.log( payload);
    try {
      const token = await user?.getIdToken();

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to create product");
      }

      alert("✅ Product added successfully!");
      setFormData({
        name: "",
        description: "",
        price: "",
        stock: "",
        category: "",
        imageUrl: "",
      });
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Failed to add product");
    }
  };


  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl">
      <h1 className="text-2xl font-bold text-yellow-500 mb-6">
        🛒 Add New Product
      </h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-semibold text-gray-700">
            Product Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 max-h-80"
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Price ($)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Stock</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        {/* input field category */}
        <div>
          <label className="block font-semibold text-gray-700">Category</label>
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Image URL</label>
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-yellow-600 transition"
        >
          🚀 Add Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
