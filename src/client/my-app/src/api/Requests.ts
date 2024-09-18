import { baseUrl } from "../Constants/apiConstant";
import axios, { AxiosResponse } from "axios";

interface ApiError {
    statusCode: number;
    message: string;
}

export const post = async <T>(url:string, data?:any) => {
    try {
        const rs: AxiosResponse<T> = await axios.post<T>(`${baseUrl}/${url}`, data)
        return rs.data

    } catch ( error ){

        if (axios.isAxiosError(error) && error.response) {
            throw {
                statusCode: error.response.status,
                message: error.response.data.message || 'An error has occured'
            } as ApiError;
            
        } else {
            throw {
                statusCode: 500,
                message: 'Internal Server Error: Error setting up request or no response from server'
            } as ApiError;

        }
    }
}

export const get = async <T>(url:string, data?:any) => {
    try {
        const rs: AxiosResponse<T> = await axios.get<T>(`${baseUrl}/${url}`, data)
        return rs.data

    } catch ( error ){

        if (axios.isAxiosError(error) && error.response) {
            throw {
                statusCode: error.response.status,
                message: error.response.data.message || 'An error has occured'
            } as ApiError;

        } else {
            throw {
                statusCode: 500,
                message: 'Internal Server Error: Error setting up request or no response from server'
            } as ApiError;

        }
    }
}

export const put = async <T>(url:string, data?:any) => {
    try {
        const rs: AxiosResponse<T> = await axios.put<T>(`${baseUrl}/${url}`, data)
        return rs.data

    } catch ( error ){

        if (axios.isAxiosError(error) && error.response) {
            throw {
                statusCode: error.response.status,
                message: error.response.data.message || 'An error has occured'
            } as ApiError;

        } else {
            throw {
                statusCode: 500,
                message: 'Internal Server Error: Error setting up request or no response from server'
            } as ApiError;

        }
    }
}

export const del = async <T>(url:string, data?:any) => {
    try {
        const rs: AxiosResponse<T> = await axios.delete<T>(`${baseUrl}/${url}`, data)
        return rs.data

    } catch ( error ){

        if (axios.isAxiosError(error) && error.response) {
            throw {
                statusCode: error.response.status,
                message: error.response.data.message || 'An error has occured'
            } as ApiError;

        } else {
            throw {
                statusCode: 500,
                message: 'Internal Server Error: Error setting up request or no response from server'
            } as ApiError;

        }
    }
}
