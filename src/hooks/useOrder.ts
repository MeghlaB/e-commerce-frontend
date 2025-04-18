import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

/** Payload shape for creating an order */
export interface CreateOrderPayload {
  shipping: { name: string; address: string; zip: string };
  payment:  { card: string; expiry: string; cvv: string };
}

export const useCreateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    // 🚀 Define the mutation function
    mutationFn: async (payload: CreateOrderPayload) => {
      const { data } = await axios.post(
        `${apiBaseUrl}/api/orders`,
        payload,
      );
      return data;
    },
    // ✅ On success, invalidate relevant caches
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });
};
