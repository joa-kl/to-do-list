
// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
import { filtersReducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasksSlice";


// const enhancer = devToolsEnhancer(); nie podajemy enhancera. w toolkit devtoolsenhancer pojawia sie automatycznie

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filters: filtersReducer,
    },
});

// export const store = createStore(rootReducer, enhancer);
