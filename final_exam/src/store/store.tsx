import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import logReducer from './logSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        log: logReducer
    }
})

export type RootType = ReturnType<typeof store.getState>