"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthProvider";

const UpdateProduct = () => {
  const { user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    imageUrl: "",
  });

  const [loading, setLoading] = useState(true);

  // Fetch existing product
  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/${productId}`);
        const data = await res.json();

        if (res.ok) {
          setFormData({
            name: data.name,
            description: data.description,
            price: data.price,
            stock: data.stock,
            category: data.category,
            imageUrl: data.imageUrl[0] || "",
          });
        } else {
          alert("❌ Failed to fetch product");
        }
      } catch (error) {
        console.error("❌ Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
      imageUrl: [formData.imageUrl],
    };

    try {
      const token = await user?.getIdToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to update product");
      }

      alert("✅ Product updated successfully!");
      router.push("/dashboard/products"); // redirect if needed
    } catch (error) {
      console.error("❌ Error updating product:", error);
      alert("Failed to update product");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading product data...</p>;

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl">
      <h1 className="text-2xl font-bold text-blue-500 mb-6">✏️ Update Product</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        {["name", "description", "price", "stock", "category", "imageUrl"].map((field) => (
          <div key={field}>
            <label className="block font-semibold text-gray-700 capitalize">{field}</label>
            {field === "description" ? (
              <textarea
                name={field}
                value={formData[field]}
                onChange={handleChange}
                rows={3}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 max-h-80"
              />
            ) : (
              <input
                type={field === "price" || field === "stock" ? "number" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-600 transition"
        >
          🔄 Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
