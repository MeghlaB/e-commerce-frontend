'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

const mockProducts = [/* your mock data stays here, unchanged */];

const formFields = ['name', 'description', 'price', 'stock', 'category', 'imageUrl'] as const;

type FormField = (typeof formFields)[number];

interface FormData {
  name: string;
  description: string;
  price: string;
  stock: string;
  category: string;
  imageUrl: string;
}

const EditProductPage = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    imageUrl: '',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const product = mockProducts.find((item) => item._id === id);
    if (product) {
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price.toString(),
        stock: product.stock.toString(),
        category: product.category,
        imageUrl: product.imageUrl,
      });
    }
    setLoading(false);
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated Product:', formData);
    alert('Product updated successfully!');

    // 🔄 Replace with API call here
    // await axios.put(`/api/products/${id}`, formData)

    router.push('/dashboard/seller/products');
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-yellow-500 capitalize">🛠️ Edit Product Details</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        {formFields.map((field) => (
          <div key={field}>
            <label className="block mb-1 capitalize font-medium text-gray-700">{field}</label>
            {field === 'description' ? (
              <textarea
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
              />
            ) : (
              <input
                type={field === 'price' || field === 'stock' ? 'number' : 'text'}
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
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={() => router.push('/dashboard/seller/products')}
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
