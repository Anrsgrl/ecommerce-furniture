import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/data";

const initialState = {
    products: [...data],
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        handleSort: (state, action) => {
            if (action.payload === "Low") {
                state.products = [...state.products.sort((a, b) => a.price > b.price ? 1 : -1)]
            } else if (action.payload === "High") {
                state.products = [...state.products.sort((a, b) => a.price < b.price ? 1 : -1)]
            } else {
                state.products = [...state.products.sort((a, b) => a.id > b.id ? 1 : -1)]
            }
        },
        handleCategory: (state, action) => {
            if (action.payload === "All") {
                state.products = [...data];
            } else {
                const categoryItems = data.filter((item) => {
                    return item.category === action.payload;
                });
                state.products = categoryItems;
            }
        },

    },
});

export const filterReducer = filterSlice.reducer;
export const { handleSort, handleCategory } =
    filterSlice.actions;