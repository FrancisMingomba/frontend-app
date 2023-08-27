import http from "./httpService";
import  apiUlr  from "../config.json";

const apiEndpoint = apiUlr + "/auth";

export function login(email, password) {
    return http.post(apiEndpoint, { email, password});

}