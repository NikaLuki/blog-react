import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "./post";
import adminReducer from "./admin";

const rootReducer = combineReducers({
    posts: postsReducer,
    users: adminReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
