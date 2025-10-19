import React, { createContext, useEffect, useMemo, useState, useCallback } from 'react';

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

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem('cart:v1');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage', error);
    }
  }, []);

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cart:v1', JSON.stringify(items));
    } catch (error) {
      console.error('Failed to save cart to localStorage', error);
    }
  }, [items]);

  const addItem = useCallback<CartContextValue['addItem']>(({ name, image, subtitle }) => {
    const id = `${name}|${image}`;
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.id === id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + 1 };
        return next;
      }
      return [...prev, { id, name, image, subtitle, quantity: 1 }];
    });
  }, []);

  const decreaseItem = useCallback<CartContextValue['decreaseItem']>((id) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.id === id);
      if (idx < 0) return prev;
      const target = prev[idx];
      if (target.quantity <= 1) return prev.filter((i) => i.id !== id);
      const next = [...prev];
      next[idx] = { ...target, quantity: target.quantity - 1 };
      return next;
    });
  }, []);

  const removeItem = useCallback<CartContextValue['removeItem']>((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clear = useCallback<CartContextValue['clear']>(() => setItems([]), []);

  const totalCount = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items]);

  const value = useMemo<CartContextValue>(() => ({ items, totalCount, addItem, decreaseItem, removeItem, clear }), [items, totalCount, addItem, decreaseItem, removeItem, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
