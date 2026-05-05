import { createSlice } from "@reduxjs/toolkit";

const logSlice = createSlice({
    name: "login",
    initialState: { log: false, role: "" },
    reducers: {
        logged: (state, action) => {state.log = true, state.role = action.payload.role},
        unlog: (state) => {state.log = false, state.role = ""}
    }
})

export const { logged, unlog } = logSlice.actions;
export default logSlice.reducer;