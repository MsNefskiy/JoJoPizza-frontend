import { configureStore } from "@reduxjs/toolkit";
import { cartSliceReducer } from "./cart/slice";
import { filterSliceReducer } from "./filter/slice";
import { productSliceReducer } from "./product/slice";

export const store = configureStore({
  reducer: {
    filter: filterSliceReducer,
    cart: cartSliceReducer,
    product: productSliceReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
