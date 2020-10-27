import api from "axios"
import api_config from "../config/api.config";

const instance  = api.create({
    baseURL: api_config.url,
});

class Api {

    static async get(url: string) {
        return await instance.get(url);
    }

    static async post(url: string, data: any) {
        return await instance.post(url, data);
    }

    static async put(url: string, data: any) {
        return await instance.put(url, data);
    }

    static async delete(url: string) {
        return await instance.delete(url);
    }
}


export default Api;
