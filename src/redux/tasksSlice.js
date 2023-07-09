import { createSlice } from "@reduxjs/toolkit";
import { tasksInitialState } from "./reducer";
// import { addTask, deleteTask, toggleCompleted } from "./actions";
import { nanoid } from "nanoid";
import { fetchTasks } from "./operations";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    // reducers: {
    //     fetchingInProgress(state, action) {
    //         state.isLoading = true;
    //     },
    //     fetchingSuccess(state, action) {
    //         state.isLoading = false;
    //         state.error = null;
    //         state.items = action.payload
    //     },
    //     fetchingError(state, action) {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     }
    // },
    extraReducers: {
        [fetchTasks.pending](state, action) {
            state.isLoading = true;
        },
        [fetchTasks.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null; 
            state.items = action.payload  
        },
        [fetchTasks.rejected](state, action){
            state.isLoading = false;
            state.error = action.payload;
        }
            
    }
});

// export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
export const { fetchingInProgress, fetchingSuccess, fetchingError } =tasksSlice.actions
