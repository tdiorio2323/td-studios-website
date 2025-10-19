import { createContext } from "react";

export type CartItem = {
  id: string;
  name: string;
  image: string;
  subtitle?: string;
  quantity: number;
};

export type CartContextValue = {
  items: CartItem[];
  totalCount: number;
  addItem: (item: { name: string; image: string; subtitle?: string }) => void;
  decreaseItem: (id: string) => void;
  removeItem: (id: string) => void;
  clear: () => void;
};

export const CartContext = createContext<CartContextValue | null>(null);
