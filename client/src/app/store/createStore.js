import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users";
import postsReducer from "./post";

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
