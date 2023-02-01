import { createSlice } from "@reduxjs/toolkit";
import postService from "../services/post.service";

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

function isOutdated(date) {
    if (Date.now() - date > 10 * 60 * 1000) {
        return true;
    } else return false;
}

export const loadPostsList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().posts;
    if (isOutdated(lastFetch)) {
        dispatch(postsRequested());
        try {
            const { content } = await postService.get();
            dispatch(postsReceved(content));
        } catch (error) {
            dispatch(postsRequestFailed(error.message));
        }
    }
};

export default postsReducer;
