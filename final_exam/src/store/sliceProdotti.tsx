import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { product } from "../types/prod";

type ProdottiState = {
    list: product[];
    loading: boolean;
    error: string | null;
};

const initialState: ProdottiState = {
    list: [],
    loading: false,
    error: null
};

export const fetchProdotti = createAsyncThunk(
    "proditti/fetchProdotti",
    async () => {
        const ris = await fetch("http://localhost:3001/prodotti");
        return await ris.json();
    }
)

const prodottiSlice = createSlice({
    name: "prodotti",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProdotti.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProdotti.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchProdotti.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "Errore sconosciuto!";
            })
    }
})

export default prodottiSlice.reducer;