import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import logReducer from './logSlice';
import prodottiReducer from './sliceProdotti';
import messageReducer from './sliceMessages';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        log: logReducer,
        prod: prodottiReducer,
        messages: messageReducer
    }
})

export type RootType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;