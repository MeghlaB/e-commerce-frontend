// import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
// import axios from 'axios';

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   imageUrl: string;
//   stock: number;
//   quantity: number;
// }

// interface CartContextType {
//   cart: Product[];
//   fetchCart: () => void;
//   addToCart: (product: Product) => void;
//   updateQuantity: (productId: string, quantity: number) => void;
//   removeFromCart: (productId: string) => void;
//   clearCart: () => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// // TODO: Replace this with actual authenticated user's ID
// const USER_ID = '12345';

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<Product[]>([]);

//   const fetchCart = async () => {
//     try {
//       const res = await axios.get(`/api/cart/${USER_ID}`);
//       setCart(res.data?.products || []);
//     } catch (err) {
//       console.error('Error fetching cart:', err);
//     }
//   };

//   const addToCart = async (product: Product) => {
//     try {
//       const res = await axios.post(`/api/cart/${USER_ID}`, { product });
//       setCart(res.data.products);
//     } catch (err) {
//       console.error('Error adding to cart:', err);
//     }
//   };

//   const updateQuantity = async (productId: string, quantity: number) => {
//     try {
//       const res = await axios.put(`/api/cart/${USER_ID}/${productId}`, { quantity });
//       setCart(res.data.products);
//     } catch (err) {
//       console.error('Error updating quantity:', err);
//     }
//   };

//   const removeFromCart = async (productId: string) => {
//     try {
//       const res = await axios.delete(`/api/cart/${USER_ID}/${productId}`);
//       setCart(res.data.products);
//     } catch (err) {
//       console.error('Error removing from cart:', err);
//     }
//   };

//   const clearCart = async () => {
//     try {
//       await axios.delete(`/api/cart/${USER_ID}`);
//       setCart([]);
//     } catch (err) {
//       console.error('Error clearing cart:', err);
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   return (
//     <CartContext.Provider value={{ cart, fetchCart, addToCart, updateQuantity, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };
