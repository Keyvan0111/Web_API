import axios, {
    AxiosResponse
} from 'axios'
import { post, get, put, del } from './Requests'

interface GetResponse {
    id: number
    name: string
    done: boolean
}

export const getTasks = async () =>{
    const rs = get<any>('/items/')
    return rs
}

export const putTasks = async (id:string) => {
    const rs = put<any>(`items/${id}`)
    return rs
}