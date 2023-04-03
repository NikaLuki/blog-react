import { createSlice } from "@reduxjs/toolkit";
import postsService from "../services/post.service";
// import postService from "../services/post.service";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        postsRequested: (state) => {
            state.isLoading = true;
        },
        postsReceved: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
            state.lastFetch = Date.now();
        },
        postsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: postsReducer, actions } = postsSlice;
const { postsReceved, postsRequestFailed, postsRequested } = actions;

export const loadPostsList = () => async (dispatch) => {
    dispatch(postsRequested());
    try {
        postsService.get().then((req) => {
            dispatch(postsReceved(req.content));
        });
    } catch (error) {
        dispatch(postsRequestFailed(error.message));
    }
};
export const getPosts = () => (state) => state.posts.entities;
export const getPostLoadingStatus = () => (state) => state.posts.isLoading;

export default postsReducer;
