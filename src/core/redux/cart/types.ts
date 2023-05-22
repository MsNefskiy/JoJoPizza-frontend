export interface CartState {
    items: ICartItem[]
    totalPrice: number
    totalCount: number
}

export interface ICartItem {
    itemId: string
    title: string
    image: string
    price: number
    type: string
    size?: number
    count: number
}
