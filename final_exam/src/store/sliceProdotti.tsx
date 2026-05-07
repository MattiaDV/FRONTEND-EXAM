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

export const addProduct = createAsyncThunk(
    "AddProduct",
    async (new_product: product) => {
        const ris = await fetch("http://localhost:3001/prodotti", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(new_product)
        })

        return await ris.json();
    }
)

export const deleteProduct = createAsyncThunk(
    "DeleteProduct",
    async (id: number) => {
        await fetch(`http://localhost:3001/prodotti/${id}`, {
            method: "DELETE"
        })

        return id;
    }
)

export const updateProduct = createAsyncThunk(
    "updateProduct",
    async (updatedProd: product) => {
        const ris = await fetch(`http://localhost:3001/prodotti/${updatedProd.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProd)
        })
        return await ris.json();
    }
)

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
            .addCase(addProduct.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.list = state.list.filter(p => p.id != action.payload);
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.list = state.list.map(p => 
                    p.id == action.payload.id ? action.payload : p
                );
            })
    }
})

export default prodottiSlice.reducer;