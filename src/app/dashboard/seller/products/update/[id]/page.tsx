"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useProduct } from "../../../../../../hooks/useProduct"; // Assuming the hooks are in a hooks folder
import { useUpdateProduct } from "../../../../../../hooks/useUpdateProduct";

const formFields = [
  "name",
  "description",
  "price",
  "stock",
  "category",
  "imageUrl",
] as const;

type FormField = (typeof formFields)[number];

interface FormData {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  imageUrl: string;
}

const EditProductPage = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    imageUrl: "",
  });

  const { data: product, isLoading, isError } = useProduct(id);
  const { mutate: updateProduct, isLoading: isUpdating } = useUpdateProduct(id);

  // Sync form data with fetched product data
  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        description: product.description || "",
        price: product.price.toString(),
        stock: product.stock.toString(),
        category: product.category,
        imageUrl: product.imageUrl,
      });
    }
  }, [product]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      updateProduct({
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
      });
      router.push("/dashboard/seller/products");
    } catch (error) {
      console.error("Failed to update product:", error);
      alert("Error updating product");
    }
  };

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError)
    return <p className="text-center mt-10">Error loading product details</p>;

  return (
    <div className="max-w-7xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-yellow-500 capitalize">
        🛠️ Edit Product Details
      </h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        {formFields.map((field) => (
          <div key={field}>
            <label className="block mb-1 capitalize font-medium text-gray-700">
              {field}
            </label>
            {field === "description" ? (
              <textarea
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
              />
            ) : (
              <input
                type={
                  field === "price" || field === "stock" ? "number" : "text"
                }
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
              />
            )}
          </div>
        ))}
        <div className="flex justify-between mt-6">
          <button
            type="submit"
            className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600"
            disabled={isUpdating}
          >
            {isUpdating ? "Saving..." : "Save Changes"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/dashboard/seller/products")}
            className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductPage;
