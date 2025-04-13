import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const StaffSlice = createSlice({
    name: "add_staff",
    initialState: {
        data: []
    },
    reducers: {
        addStaff: (state, action) => {
            state.data.push(action.payload)
            console.log(action, "--------action")
            console.log(state, "--------state");
        }
    }
});

export const { addStaff } = StaffSlice.actions;
export default StaffSlice.reducer;