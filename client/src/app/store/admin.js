import { createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import generateAuthError from "../utils/generateAuthError";
import history from "../utils/history";

const initialState = localStorageService.getAccessToken()
    ? {
          entities: null,
          isLoading: true,
          error: null,
          auth: { userId: localStorageService.getUserId() },
          isLoggedIn: true,
          dataLoaded: false
      }
    : {
          entities: null,
          isLoading: false,
          error: null,
          auth: null,
          isLoggedIn: false,
          dataLoaded: false
      };

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        adminLoggedOut: (state) => {
            state.entities = null;
            state.isLoggedIn = false;
            state.auth = null;
            state.dataLoaded = false;
        },
        authRequestSuccess: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        authRequested: (state) => {
            state.error = null;
        }
    }
});

const { reducer: adminReducer, actions } = adminSlice;
const { adminLoggedOut, authRequestFailed, authRequestSuccess, authRequested } =
    actions;

export const logIn =
    ({ payload, redirect }) =>
    async (dispatch) => {
        const { email, password } = payload;
        dispatch(authRequested());
        try {
            const { content } = await authService.login({ email, password });
            dispatch(authRequestSuccess({ userId: content.userId }));
            localStorageService.setTokens(content);
            history.push("/posts");
        } catch (error) {
            const { code, message } = error.response.data.error;
            if (code === 400) {
                const errorMesage = generateAuthError(message);
                dispatch(authRequestFailed(errorMesage));
            } else dispatch(authRequestFailed(error.message));
        }
    };
export const logOut = () => (dispatch) => {
    localStorageService.removeAuthData();
    history.push("/");
    dispatch(adminLoggedOut());
};
export const signUp =
    ({ email, password, ...rest }) =>
    async (dispatch) => {
        dispatch(authRequested());
        try {
            const { content } = await authService.signUp({ email, password });
            localStorageService.setTokens(content);
            dispatch(authRequestSuccess({ userId: content.userId }));
            history.push("/posts");
        } catch (error) {
            dispatch(authRequestFailed(error.message));
        }
    };
export const getIsLoggedIn = () => (state) => state.admin.isLoggedIn;
export const getAuthError = () => (state) => state.admin.error;
export default adminReducer;
