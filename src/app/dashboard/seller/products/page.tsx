"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useProducts } from "@/hooks/useProducts";
import axios from "axios";
import { useAuth } from "@/context/AuthProvider";
import { useUserRole } from "@/hooks/useUserRole";

interface Product {
  _id: string;
  name: string;
  imageUrl: string[];
  stock: number;
  price: number;
  category: string;
  rating: number;
  seller: string;
}

const AllProducts = () => {
  const { user, loading: authLoading } = useAuth();
  const { role, userId, isLoading: roleLoading } = useUserRole(user?.email);
  const {
    data: productsData,
    isLoading: productsLoading,
    error,
    refetch,
  } = useProducts();
  const [deleting, setDeleting] = useState(false);

  const isInitialLoading = authLoading || roleLoading || productsLoading;

  // Early return to prevent hydration mismatch
  if (isInitialLoading || !userId) {
    return <div className="text-center p-6">Loading...</div>;
  }

  if (error) return <div>Error loading products</div>;

  const products =
    productsData?.filter((product: Product) => product.seller === userId) || [];

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    try {
      setDeleting(true);
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/${id}`
      );
      alert("Product deleted successfully!");
      refetch();
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Error deleting product");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-yellow-500 mb-6 border mx-auto max-w-7xl p-5 rounded-xl">
        📦 All Products
      </h1>
      <div className="max-w-7xl overflow-x-auto max-h-[70vh] overflow-y-auto mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl border">
        <table className="min-w-full table-auto">
          <thead>
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
                    src={product.imageUrl?.[0] || "/images/default.jpg"}
                    alt={product.name}
                    width={64}
                    height={64}
                    className="border border-yellow-500 object-cover"
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
                    disabled={deleting}
                  >
                    {deleting ? "Deleting..." : "Delete"}
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
