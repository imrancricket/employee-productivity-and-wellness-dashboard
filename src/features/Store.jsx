import { configureStore } from "@reduxjs/toolkit";
import StudentsReducer from "./slices/StudentSlice";
import CoursesReducer from "./slices/CoursesSlice";
import StaffReducer from "./slices/StaffSlice";
import SyllabusReducer from "./slices/SyllabusSlice";


const Store = configureStore({
    reducer: {
        add_students: StudentsReducer,
        add_courses: CoursesReducer,
        add_staff: StaffReducer,
        add_syllabus: SyllabusReducer
    }
});

export default Store;