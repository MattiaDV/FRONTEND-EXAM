import { createSlice } from "@reduxjs/toolkit";
import type { messages } from "../types/messageType";

const messageSlice = createSlice({
    name: "messages",
    initialState: { messages: [] as messages[] },
    reducers: {
        add: (state, action) => { state.messages.push(action.payload) },
        remove: (state, action) => { state.messages = state.messages.filter(m => m.id != action.payload) }
    }
})

export const { add, remove } = messageSlice.actions;
export default messageSlice.reducer;