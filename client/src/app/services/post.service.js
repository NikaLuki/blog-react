import httpService from "./http.service";

const postsEndpoint = "posts/";

const postsService = {
    get: async () => {
        const { data } = await httpService.get(postsEndpoint);
        return data;
    }
};

export default postsService;
