import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState } from "./types";

const initialState: FilterState = {
  categoryId: 0,
  sort: {
    name: "алфвавиту",
    property: "title",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },

    setSortType(state, action: PayloadAction<{ name: string, property: string }>) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setSortType } = filterSlice.actions;

export const filterSliceReducer = filterSlice.reducer;
