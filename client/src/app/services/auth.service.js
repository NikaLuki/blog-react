import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const authEndpoints = "/auth/";

const authService = {
    login: async ({ email, password }) => {
        const { data } = await httpService.post(authEndpoints + "login", {
            email,
            password,
            returnSecureToken: true
        });
        return data;
    },
    signUp: async ({ email, password }) => {
        const { data } = await httpService.post(authEndpoints + "signUp", {
            email,
            password,
            returnSecureToken: true
        });
        return data;
    },
    refresh: async () => {
        const { data } = await httpService.post(authEndpoints + "token", {
            grant_type: "refresh_token",
            refresh_token: localStorageService.getRefreshToken()
        });
        return data;
    }
};

export default authService;
