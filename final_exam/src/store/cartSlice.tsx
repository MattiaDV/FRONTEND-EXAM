import { createSlice } from "@reduxjs/toolkit";
import type { product } from "../types/prod";

const cartSlice = createSlice({
    name: "cart",
    initialState: { list: [] as product[] },
    reducers: {
        add: (state, action) => { state.list.push(action.payload) },
        remove: (state, action) => { state.list = state.list.filter(p => p.id !== action.payload) },
        clear: (state) => { state.list = [] }
    }
})

export const { add, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;