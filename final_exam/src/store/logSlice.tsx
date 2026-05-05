import { createSlice } from "@reduxjs/toolkit";

const logSlice = createSlice({
    name: "login",
    initialState: { log: false },
    reducers: {
        logged: (state) => {state.log = true},
        unlog: (state) => {state.log = false}
    }
})

export const { logged, unlog } = logSlice.actions;
export default logSlice.reducer;