import { create } from "zustand";

// sidebar Store --------------

export const useSidebar = create((set) => ({
    bar: false,
    openBar: () => set({ bar: true }),
    closeBar: () => set({ bar: false }),
}));



// sidebar Store --------------
