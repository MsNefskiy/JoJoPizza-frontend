import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../../constants/status";
import { IProduct } from "../../models/product.model";
import { fetchProducts } from "./asyncActions";
import { ProductState } from "./types";

const initialState: ProductState = {
    items: [],
    status: Status.LOADING
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = Status.LOADING;
            state.items = [];
        })
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        })
        builder.addCase(fetchProducts.rejected, (state) => {
            state.status = Status.ERROR;
            state.items = [];
        })
    },
});

export const productSliceReducer = productSlice.reducer;
