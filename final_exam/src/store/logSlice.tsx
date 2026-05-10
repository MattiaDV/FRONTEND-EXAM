import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface LoginState {
    complete_name: string;
    email: string;
    password: string;
    role: string;
    log: boolean;
}

interface LoginPayload {
    email: string;
    password: string;
}

interface registrationLog {
    complete_name: string;
    email: string;
    password: string;
    role: string;
}

export const addUser = createAsyncThunk(
    "AddProduct",
    async (new_user: registrationLog) => {
        const ris = await fetch("http://localhost:3001/utenti", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(new_user)
        })

        return await ris.json();
    }
)

export const logged = createAsyncThunk(
    "login/logged",
    async ({ email, password }: LoginPayload) => {
        const ris = await fetch("http://localhost:3001/utenti");
        const data = await ris.json();

        const user = data.find(
            (u: any) =>
                u.email === email &&
                u.password === password
        );

        if (!user) {
            throw new Error("Utente non trovato");
        }

        return user;
    }
);

const initialState: LoginState = {
    complete_name: "",
    email: "",
    password: "",
    role: "",
    log: false
};

const logSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        unlog: (state) => { state.complete_name = "", state.email = "", state.log = false, state.password = "", state.role = "" }
    },
    extraReducers: (builder) => {
        builder.addCase(logged.fulfilled, (state, action) => {
            state.complete_name = action.payload.complete_name;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.role = action.payload.role;
            state.log = true;
        });

        builder.addCase(logged.rejected, (state) => {
            state.log = false;
        });
    }
});

export const { unlog } = logSlice.actions;
export default logSlice.reducer;