"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "axios";
import { useAuth } from "@/context/AuthProvider";
import { useUserRole } from "@/hooks/useUserRole";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  stock: number;
  quantity: number;
}

interface CartContextType {
  cart: Product[];
  fetchCart: () => void;
  addToCart: (product: Product) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const { user } = useAuth(); // ✅ Now it's inside the component
  const { userId } = useUserRole(user?.email);

  // console.log(userId, "user from cart provider");

  const fetchCart = async () => {
    if (!userId) return;

    try {
      const res = await axios.get(`${apiBaseUrl}/api/cart/${userId}`);
      setCart(res.data?.products || []);
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  const addToCart = async (product: Product) => {
    if (!userId) return;
  
    try {
      const productToSend = {
        _id: product._id,
        name: product.name,
        price: product.price,
        imageUrl: Array.isArray(product.imageUrl) ? product.imageUrl[0] : product.imageUrl, // ✅ FIX
        quantity: product.quantity,
      };
  
      const res = await axios.post(`${apiBaseUrl}/api/cart/${userId}`, {
        userId,
        product: productToSend,
      });
  
      setCart(res.data.products);
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };
  

  const updateQuantity = async (productId: string, quantity: number) => {
    if (!userId) return;

    try {
      const res = await axios.put(
        `${apiBaseUrl}/api/cart/${userId}/${productId}`,
        { quantity }
      );
      setCart(res.data.products);
    } catch (err) {
      console.error("Error updating quantity:", err);
    }
  };

  const removeFromCart = async (productId: string) => {
    if (!userId) return;

    try {
      const res = await axios.delete(
        `${apiBaseUrl}/api/cart/${userId}/${productId}`
      );
      setCart(res.data.products);
    } catch (err) {
      console.error("Error removing from cart:", err);
    }
  };

  const clearCart = async () => {
    if (!userId) return;

    try {
      await axios.delete(`${apiBaseUrl}/api/cart/${userId}`);
      setCart([]);
    } catch (err) {
      console.error("Error clearing cart:", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [userId]);

  return (
    <CartContext.Provider
      value={{
        cart,
        fetchCart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
