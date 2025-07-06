import { createEndpoint } from './core/create-endpoint';

export const commonAPI = {
  getCoinsList: createEndpoint('coins/markets'),
};
