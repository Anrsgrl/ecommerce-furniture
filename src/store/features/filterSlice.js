import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data";

const initialState = {
    products: [...data],
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        handleSortt: (state, action) => {
            if (action.payload === "Low") {
                state.products = [...data.sort((a, b) => a.price > b.price ? 1 : -1)]
            } else if (action.payload === "High") {
                state.products = [...data.sort((a, b) => a.price < b.price ? 1 : -1)]
            } else {
                state.products = [...data.sort((a, b) => a.id > b.id ? 1 : -1)]
            }
        },
    },
});

export const filterReducer = filterSlice.reducer;
export const { handleSortt } =
    filterSlice.actions;