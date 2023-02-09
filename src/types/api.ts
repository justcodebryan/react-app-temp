import { AxiosResponse } from 'axios'

export type CustomResponse<TResponse = any, TConfig = any> = Promise<void | AxiosResponse<TResponse, TConfig>>
