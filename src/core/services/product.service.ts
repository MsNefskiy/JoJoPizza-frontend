import { AxiosResponse } from "axios";
import { IProduct } from "../models/product.model";
import $api from "../api";


export default class productService {
    static async getProducts(): Promise<AxiosResponse<IProduct[]>> {
        return await $api.get<IProduct[]>('product');
    }

    static async getProductById(id: string): Promise<AxiosResponse<IProduct>> {
        return await $api.get<IProduct>(`product/${id}`);
    }
} 