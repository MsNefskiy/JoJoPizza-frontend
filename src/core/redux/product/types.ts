import { Status } from "../../constants/status"
import { IProduct } from "../../models/product.model"

export interface ProductState {
    items: IProduct[]
    status: Status
}