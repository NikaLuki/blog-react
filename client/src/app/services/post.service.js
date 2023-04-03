import httpService from "./http.service";

const postsEndpoint = "/post/";

const postsService = {
    get: async () => {
        const req = await httpService.get(postsEndpoint);
        return req.data;
    }
};

export default postsService;
