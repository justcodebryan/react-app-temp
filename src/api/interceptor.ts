import { AxiosRequestConfig, AxiosResponse } from 'axios'
// Add a request interceptor
export const requestHandler = (config: AxiosRequestConfig) => {
  // Do something before request is sent
  return config
}

export const responseHandler = (response: AxiosResponse) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  return response.data
}

// TODO: handler the error response and get error code after synced with backend.
export const errorHandler = (err: AxiosResponse) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  const status = err.data.response?.status || 500
  return status
  // we can handle global errors here
  // switch (
  //   status
  //   // authentication (token related issues)
  //   // case 401: {
  //   //   return Promise.reject(new APIError(err.message, 409))
  //   // }

  //   // // forbidden (permission related issues)
  //   // case 403: {
  //   //   return Promise.reject(new APIError(err.message, 409))
  //   // }

  //   // // bad request
  //   // case 400: {
  //   //   return Promise.reject(new APIError(err.message, 400))
  //   // }

  //   // // not found
  //   // case 404: {
  //   //   return Promise.reject(new APIError(err.message, 404))
  //   // }

  //   // // conflict
  //   // case 409: {
  //   //   return Promise.reject(new APIError(err.message, 409))
  //   // }

  //   // // unprocessable
  //   // case 422: {
  //   //   return Promise.reject(new APIError(err.message, 422))
  //   // }

  //   // // generic api error (server related) unexpected
  //   // default: {
  //   //   return Promise.reject(new APIError(err.message, 500))
  //   // }
  // ) {
  // }
}
