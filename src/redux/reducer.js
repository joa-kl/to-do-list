// import { combineReducers } from "@reduxjs/toolkit";

// import { combineReducers } from "redux";
import { statusFilters } from "./constans";
import { setStatusFilter } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

export const tasksInitialState = [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
];

// export const tasksReducerOld = (state = tasksInitialState, action) => {
//     switch (action.type) {
//         case addTask.type:
//             return [...state, action.payload];
//         case deleteTask.type:
//             return state.filter(task => task.id !== action.payload);
//         case toggleCompleted.type:
//             return state.map(task => {
//                 if (task.id !== action.payload) {
//                     return task;
//                 }
//                 return { ...task, completed: !task.completed };
//             });
//         default:
//             return state;
//     }
// };

// export const tasksReducer = createReducer(tasksInitialState, {
//     [addTask]: (state, action) => {
//         // return [...state, action.payload];
//         //------------------immer
//         state.push(action.payload)
//      },
//     [deleteTask]: (state, action) => { 
//         // return state.filter(task => task.id !== action.payload);
//         //-----
//         //immer
//         const index = state.findIndex(task => task.id === action.payload);
//         state.splice(index, 1);
//     },
//     [toggleCompleted]: (state, action) => {
//         for (const task of state) {
//             if (task.id === action.payload) {
//                 task.completed = !task.completed
//             }
//         }
//         //-----------------immer above
//         // return state.map(task => {
//         //     if (task.id !== action.payload) {
//         //         return task;
//         //     }
//         //     return { ...task, completed: !task.completed };
//         // });
//     },
// })

const filtersInitialState = {
    status: statusFilters.all,
};

export const filtersReducerOld = (state = filtersInitialState, action) => {
    switch (action.type) {
        case setStatusFilter.type:
            return {
                ...state,
                status: action.payload,
            };
        default:
            return state;
    }
};

export const filtersReducer = createReducer(filtersInitialState, {
    [setStatusFilter]: (state, action) => {
        state.status = action.payload;
        // return {
        //     ...state,
        //     status: action.payload,
        // };
    }
})

// export 

