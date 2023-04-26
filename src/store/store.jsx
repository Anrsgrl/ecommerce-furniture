import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cartSlice";
import { filterReducer } from "./features/filterSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: filterReducer,
    },
});