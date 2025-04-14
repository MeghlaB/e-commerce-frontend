import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface Product {
  _id: string;
  seller: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  imageUrl: string;
  rating: number;
  createdAt: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  const res = await axios.get(`${apiBaseUrl}/api/products`);
  console.log(res);
  return res.data;
};

export const useProducts = () => {
  // Use the `useQuery` hook to fetch products
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return { data, isLoading, error, refetch };
};
