import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducer from "./slice";

const rootReducer = combineReducers({
    expense: reducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;