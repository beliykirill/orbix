import { AppRegistry } from 'react-native';
import { I18nextProvider } from 'react-i18next';
import { App } from '@app';
import { ThemeProvider } from 'styled-components';
import i18n from '@shared/lib/i18n';
import { defaultTheme } from '@shared/lib/themes';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => () => (
  <ThemeProvider theme={defaultTheme}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </ThemeProvider>
));
