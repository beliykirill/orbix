import ENVConfig from 'react-native-config';
import { createSimpleApi } from './create-simple-api';

export const createEndpoint = createSimpleApi(
  'https://api.coingecko.com/api/v3',
);
