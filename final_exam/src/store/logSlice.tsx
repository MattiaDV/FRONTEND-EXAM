import { createSlice } from "@reduxjs/toolkit";

const logSlice = createSlice({
    name: "login",
    initialState: { username: "", password: "", log: false, role: "" },
    reducers: {
        logged: (_, action) => {return action.payload},
        unlog: () => {return {username: "", password: "", log: false, role: ""}}
    }
})

export const { logged, unlog } = logSlice.actions;
export default logSlice.reducer;