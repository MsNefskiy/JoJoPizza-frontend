export interface CartState {
    items: CartItem[]
    totalPrice: number
    totalCount: number
}

export interface CartItem {
    itemId: string
    title: string
    image: string
    price: number
    type: string
    size?: number
    count: number
}
