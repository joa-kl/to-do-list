import axios from "axios";
// import { fetchingError, fetchingInProgress, fetchingSuccess } from "./tasksSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

// export const fetchTasks1 = () => async dispatch =>{
//     try {
//         dispatch(fetchingInProgress());
//         const response = await axios.get("/tasks")
//         dispatch(fetchingSuccess(response.data));
//     } catch (e) {
//         dispatch(fetchingError(e.message))
//     }
// }

export const fetchTasks = createAsyncThunk("tasks/fetchAll", async (arg, thunkAPI) => {
    try {
        const response = await axios.get("/tasks")
        return response.data;

    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})

export const addTask = createAsyncThunk(
    "tasks/addTask",
    async (text, thunkAPI) => {
        try {
            const resposne = await axios.post("/tasks", { text })
            return resposne.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }  
    }
)

export const toggleCompleted = createAsyncThunk(
    "tasks/toggleCompleted",
    async (task, thunkAPI) => {
        try {
            const resposne = await axios.put(`/tasks/${task.id}`, { 
                completed: !task.completed
             })
            return resposne.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }  
    }
)