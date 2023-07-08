import { createSlice } from "@reduxjs/toolkit";
import { tasksInitialState } from "./reducer";
// import { addTask, deleteTask, toggleCompleted } from "./actions";
import { nanoid } from "nanoid";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: tasksInitialState,
    reducers: {
        addTask: {
            reducer(state, action) {
            state.push(action.payload)
            },
            prepare(text) {
                return {
                    payload: {
                        id: nanoid(),
                        text,
                        completed: false,
                }}
            }
        },
        deleteTask(state, action) { 
            const index = state.findIndex(task => task.id === action.payload);
            state.splice(index, 1);
        },
        toggleCompleted(state, action) {
            for (const task of state) {
                if (task.id === action.payload) {
                    task.completed = !task.completed;
                    break;
                }
            }
        },
    },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
