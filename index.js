/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { App } from '@app/index';
import { name as appName } from './app.json';
import { I18nextProvider } from 'react-i18next';
import i18n from '@shared/lib/i18n';

AppRegistry.registerComponent(appName, () => () => (
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
));
