import { IProduct } from "../../core/models/product.model";

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface ProductState {
    items: IProduct[]
    status: Status
}