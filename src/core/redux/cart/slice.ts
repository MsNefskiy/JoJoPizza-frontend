import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem, CartState } from "./types";

const initialState: CartState = {
    items: [],
    totalPrice: 0,
    totalCount: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<ICartItem>) {
            const findItem = state.items.find((item) => item.itemId === action.payload.itemId);

            if (findItem) {
                findItem.count += 1;
                state.totalCount += 1;
            } else {
                state.items.push(action.payload)
                state.totalCount += 1;
            }

            state.totalPrice = state.items.reduce((sum, item) => {
                return sum + (item.price * item.count);
            }, 0)
        },
        addPlus(state, action: PayloadAction<string>) {
            const findItem = state.items.find(item => item.itemId === action.payload);
            if (findItem) {
                findItem.count += 1;
                state.totalCount += 1;
                state.totalPrice += findItem.price;
            }
        },
        addMinus(state, action: PayloadAction<string>) {
            const findItem = state.items.find(item => item.itemId === action.payload);

            if (findItem) {
                findItem.count -= 1;
                state.totalCount -= 1;
                state.totalPrice -= findItem.price;
                if (findItem.count < 1) {
                    state.items = state.items.filter((item: ICartItem) => item.itemId !== findItem.itemId);
                }
            }
            
        },
        removeItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter((item: ICartItem) => item.itemId !== action.payload);
        },
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
            state.totalCount = 0;
        }
    },
});

export const { addItem, removeItem, clearItems, addPlus, addMinus } = cartSlice.actions;

export const cartSliceReducer = cartSlice.reducer;
