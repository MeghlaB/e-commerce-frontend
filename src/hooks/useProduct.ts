import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

interface Product {
  _id: string
  name: string
  description?: string
  price: number
  category: string
  imageUrl: string
  // Add more fields if needed
}

export const useProduct = (id: string) => {
  return useQuery<Product>({
    queryKey: ['product', id],
    queryFn: async () => {
      const { data } = await axios.get(`${apiBaseUrl}/api/products/${id}`)
      return data
    },
    enabled: !!id, // only fetch when id is provided
  })
}
