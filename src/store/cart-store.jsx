import { create } from "zustand";

export const useCart = create((set) => ({
    cart: [],
    setCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
    removeFromCart: (productId) => set((state) => ({ cart: state.cart.filter((product) => product.id !== productId) })),
    clearCart: () => set({ cart: [] }),
}));
