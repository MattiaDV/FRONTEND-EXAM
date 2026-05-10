import { createSlice } from "@reduxjs/toolkit";
import type { productCart } from "../types/prod";

interface CartState {
    carts: {
        [email: string]: productCart[];
    }
}

const initialState: CartState = {
    carts: {}
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        add: (state, action) => {

            const { email, product } = action.payload;

            if (!state.carts[email]) {
                state.carts[email] = [];
            }

            state.carts[email].push(product);
        },

        remove: (state, action) => {

            const { email, fake_cart_id } = action.payload;

            state.carts[email] = state.carts[email].filter(
                p => p.fake_cart_id !== fake_cart_id
            );
        },

        clear: (state, action) => {

            const email = action.payload;

            state.carts[email] = [];
        }

    }
});

export const { add, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;