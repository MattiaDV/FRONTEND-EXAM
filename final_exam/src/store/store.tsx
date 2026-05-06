import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import logReducer from './logSlice';
import prodottiReducer from './sliceProdotti';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        log: logReducer,
        prod: prodottiReducer
    }
})

export type RootType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;