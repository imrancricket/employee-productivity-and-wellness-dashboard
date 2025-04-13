import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const StudentsSlice = createSlice({
  name: "add_students",
  initialState: {
    data: [],
    message: "",
  },
  reducers: {
    addStudents: (state, action) => {
      state.data.push(action.payload);
    },
    setBadge: (state, action) => {
      console.log(action, "--------action");
      console.log(state, "-----state");
      state.message = action.payload;
    },
  },
});

export const { addStudents, setBadge } = StudentsSlice.actions;
export default StudentsSlice.reducer;
