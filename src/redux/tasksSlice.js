import { createSlice } from "@reduxjs/toolkit";
import { tasksInitialState } from "./reducer";
// import { addTask, deleteTask, toggleCompleted } from "./actions";
import { nanoid } from "nanoid";
import { addTask, fetchTasks, toggleCompleted } from "./operations";

const handlePending = state => {
    state.isLoading = true;
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

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
        [fetchTasks.pending]: handlePending,
        [addTask.pending]: handlePending,
        [toggleCompleted.pending]: handlePending,
        [fetchTasks.rejected]: handleRejected,
        [addTask.rejected]: handleRejected,
        [toggleCompleted.rejected]: handleRejected,
        [fetchTasks.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null; 
            state.items = action.payload  
        },
        [addTask.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload)
        },
        [toggleCompleted.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                task => task.id === action.payload.id
            );
            state.items[index].completed = !state.items[index].completed
        },
        
        //     (state, action) {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // }
            
    }
});

// export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
export const { fetchingInProgress, fetchingSuccess, fetchingError } =tasksSlice.actions
