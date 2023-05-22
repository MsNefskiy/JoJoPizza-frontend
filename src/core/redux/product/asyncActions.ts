import { createAsyncThunk } from "@reduxjs/toolkit";
import productService from "../../services/product.service";

export const fetchProducts = createAsyncThunk('products/fetchByIdStatus',
    async () => {
        const response = await productService.getProducts();
        return response.data;
    }
)
