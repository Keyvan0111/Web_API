import axios, {
    AxiosResponse
} from 'axios'
import { post, get, put, del } from './Requests'
import { TaskProp } from '../Models/Task'

interface GetResponse {
    id: number
    name: string
    done: boolean
}

export const createTask = async (data?:TaskProp) => {
    const rs = post<any>('items/', data)
    return rs
}

export const getTasks = async () =>{
    const rs = get<any>('/items/')
    return rs
}

export const putTasks = async (item_id: number | undefined, data: TaskProp) => {
    const rs = put<any>(`items/${item_id}`, data)
    return rs
}

export const deleteTask = async (item_id: number | undefined) => {
    const rs = del<any>(`items/${item_id}`)
    return rs
}