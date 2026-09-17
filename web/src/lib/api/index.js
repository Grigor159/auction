"use client";

import axios from "axios";
import { BASE_API } from "./config";
import { queryClient } from "@/providers/queryProvider";
import { error } from "@/components/ui/alerts";

const instance = axios.create({
    baseURL: BASE_API,
});

instance.interceptors.response.use(
    (response) => response,
    (err) => {
        const { status, data } = err.response || {};
        const { exitMessage } = data || {};

        if ((status === 401 || status === 403 || status === 404) && exitMessage) {
            error(exitMessage)
            queryClient.clear();
        }

        return Promise.reject(err);
    }
);

export default instance;