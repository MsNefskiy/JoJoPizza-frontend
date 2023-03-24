export interface IProduct {
    title: string;
    image: string;
    price: number;
    rating: number;
    specifications: {
        types: number[];
        sizes: number[];
        category: number;
    };
    _id: string;
}