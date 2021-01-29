import axios, { AxiosRequestConfig } from 'axios';
import {environment} from "../environments/environment";

export const restAxios = axios.create();

export interface RequestParametersI {
    url: string;
    config?: AxiosRequestConfig;
    data?: any;
    params?: {};
}

export class RestService {
    public static async get<T = any>({ url, config, params }: RequestParametersI): Promise<T> {
        const headers = config && config.headers ? config.headers : {};
        const res = await restAxios.get<T>(`${environment}/${url}`, {
            ...config,
            params,
            ...headers,
        });
        return res.data;
    }

    public static async delete({ url, config, params }: RequestParametersI): Promise<void> {
        const headers = config && config.headers ? config.headers : {};
        const res = await restAxios.delete(`${environment}/${url}`, {
            ...config,
            params,
            ...headers,
        });
        return res.data;
    }

    public static async post<T = any>({ url, config, data, params }: RequestParametersI): Promise<T> {
        const headers = config && config.headers ? config.headers : {};
        const res = await restAxios.post(`${environment}/${url}`, data, {
            ...config,
            params,
            ...headers,
        });
        return res.data;
    }

    public static async put<T = any>({ url, config, data, params }: RequestParametersI): Promise<T> {
        const headers = config && config.headers ? config.headers : {};
        const res = await restAxios.put(`${environment}/${url}`, data, {
            ...config,
            params,
            ...headers,
        });
        return res.data;
    }

    public static async patch<T = any>({ url, config, data, params }: RequestParametersI): Promise<T> {
        const headers = config && config.headers ? config.headers : {};
        const res = await restAxios.patch(`${environment}/${url}`, data, {
            ...config,
            params,
            ...headers,
        });
        return res.data;
    }
}
