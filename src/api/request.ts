import { AnyObject } from '@/types'
import { AxiosResponse } from 'axios'
import instance from './instance'

type CustomResponse<TResponse = any, TConfig = any> = Promise<void | AxiosResponse<TResponse, TConfig>>

export const $request = <TResponse = any, TParams = any, TData = any>(
  url: string,
  method: string,
  params: TParams,
  data: TData
): CustomResponse<TResponse> => {
  // res.data is a string that produced by JSON.stringify.
  return instance
    .request<string>({
      url,
      method,
      params,
      data,
    })
    .then((res) => {
      console.log(res)
      if (res && res.data) {
        return Promise.resolve(JSON.parse(res.data))
      }

      return Promise.reject(res)
    })
    .catch((err) => {
      console.error(err)
    })
}

export const $get = <TResponse = any, TParams extends object = AnyObject>(
  url: string,
  params: TParams
): CustomResponse<TResponse> => $request<TResponse>(url, 'GET', params, {})

export const $post = <TResponse = any, TData extends object = AnyObject>(
  url: string,
  data: TData
): CustomResponse<TResponse> => $request<TResponse>(url, 'POST', {}, data)

export const $put = <TResponse = any, TData extends object = AnyObject>(
  url: string,
  data: TData
): CustomResponse<TResponse> => $request<TResponse>(url, 'PUT', {}, data)

export const $delete = <TResponse = any, TData extends object = AnyObject>(
  url: string,
  data: TData
): CustomResponse<TResponse> => $request<TResponse>(url, 'DELETE', {}, data)
