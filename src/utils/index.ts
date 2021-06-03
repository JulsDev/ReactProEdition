/* eslint-disable no-return-await */
import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

interface IOptions {
  method: string;
  body?: string;
}

interface IGetWithParamsConfig {
  method: string;
  uri?: Partial<URL>;
  body: object;
}

async function req<T>(endpoint: string, query: object): Promise<T> {
  const { method, uri, body }: IGetWithParamsConfig = getUrlWithParamsConfig(endpoint, query);

  const options: IOptions = {
    method,
  };

  if (Object.keys(body).length > 0) {
    options.body = JSON.stringify(body);
  }

  const result = await fetch(Url.format(uri)).then((res) => res.json());

  return result;
}

export default req;
