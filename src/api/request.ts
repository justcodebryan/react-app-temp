import instance from './instance'

export const $request = <TParams = any, TData = any>(url: string, method: string, params: TParams, data: TData) => {
  return instance
    .request({
      url,
      method,
      params,
      data,
    })
    .then((res) => {
      return Promise.resolve(res)
    })
    .catch((err) => {
      console.error(err)
    })
}

export const $get = <TParams extends object = any>(url: string, params: TParams) => $request(url, 'GET', params, {})

export const $post = <TData extends object = any>(url: string, data: TData) => $request(url, 'POST', {}, data)

export const $put = <TData extends object = any>(url: string, data: TData) => $request(url, 'PUT', {}, data)

export const $delete = <TData extends object = any>(url: string, data: TData) => $request(url, 'DELETE', {}, data)
