import axios, { AxiosRequestConfig } from 'axios';
import { Method } from 'axios';
import { fillEndpointTemplate } from './fill-endpoint-template';

type SimpleEndpointRequestConfig = Omit<
  AxiosRequestConfig,
  'url' | 'method' | 'params'
>;

export const createSimpleApi = (baseURL: string) => {
  return function createEndpoint<R = any, P = any, RP = any, O = any>(
    method: string,
    httpMethod: Method = 'GET',
    config?: SimpleEndpointRequestConfig,
  ) {
    if (method.indexOf('/') === 0) {
      console.error("Api calls can't start with /", { method });
    }

    return async (params: P = <P>{}, routeParams: RP = {} as RP): Promise<R> =>
      await axios
        .request<R>({
          url: fillEndpointTemplate(`/${method}`, routeParams),
          method: httpMethod,
          baseURL,
          params: !['POST', 'PUT'].includes(httpMethod) ? params : null,
          data: ['POST', 'PUT'].includes(httpMethod) ? params : null,
          ...config,
        })
        .then(response => response.data);
  };
};
