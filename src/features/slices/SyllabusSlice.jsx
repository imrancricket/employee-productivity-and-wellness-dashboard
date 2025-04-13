import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const SyllabusSlice = createSlice({
  name: "add_syllabus",
  initialState: {
    data: [],
    badge: 0,
  },
  reducers: {
    addSyllabus: (state, action) => {
      state.data.push(action.payload);
    },
    setWellnessBadge: (state, action) => {
      state.badge = action.payload;
    },
  },
});

export const { addSyllabus, setWellnessBadge } = SyllabusSlice.actions;
export default SyllabusSlice.reducer;
