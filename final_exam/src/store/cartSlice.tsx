import { createSlice } from "@reduxjs/toolkit";
import type { product } from "../types/prod";

const cartSlice = createSlice({
    name: "cart",
    initialState: {list: [] as product[]},
    reducers: {
        add: (state, action) => { state.list.push(action.payload) }
    }
})

export const { add } = cartSlice.actions;
export default cartSlice.reducer;