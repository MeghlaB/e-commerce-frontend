import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const useUpdateProduct = (id: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (updatedData: any) => {
      const { data } = await axios.put(`${apiBaseUrl}/api/products/${id}`, updatedData)
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product', id] })
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
  })
}
