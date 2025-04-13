import React from "react";
import { createSlice } from "@reduxjs/toolkit";


export const CoursesSlice = createSlice({
    name: "add_courses",
    initialState: {
        data: []
    },
    reducers: {
        addCourses: (state, action) => {
            state.data.push(action.payload)
            // state.data = [...state.data, action.payload]
            return state;
        }
    }
});

export const { addCourses } = CoursesSlice.actions;
export default CoursesSlice.reducer;