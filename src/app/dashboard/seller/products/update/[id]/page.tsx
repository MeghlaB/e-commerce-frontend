'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

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
const EditProductPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = router?.query?.id || ''; 
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    imageUrl: '',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlId = window.location.pathname.split('/').pop();
    const product = mockProducts.find((item) => item._id === urlId);
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
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated Product:', formData);
    alert('Product updated successfully!');
    //TODO api handing
    //!...........
    //!...........
    //!...........
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-yellow-500 capitalize">🛠️ Edit Product details </h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        {['name', 'description', 'price', 'stock', 'category', 'imageUrl'].map((field) => (
          <div key={field}>
            <label className="block mb-1 capitalize font-medium text-gray-700">{field}</label>
            {field === 'description' ? (
              <textarea
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
              />
            ) : (
              <input
                type={field === 'price' || field === 'stock' ? 'number' : 'text'}
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
              />
            )}
          </div>
        ))}
        <div className="flex justify-between mt-6">
          <button type="submit" className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600">
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
