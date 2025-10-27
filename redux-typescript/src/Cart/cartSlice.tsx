import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: string | number;
  name: string;
  price: number;
  quantity?: number;
  image: undefined;
  title: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

const initialState: CartState = {
  items: [],
  isOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (_, index: number) => index !== action.payload
      );
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { addToCart, removeFromCart, toggleCart } = cartSlice.actions;

export default cartSlice.reducer;
