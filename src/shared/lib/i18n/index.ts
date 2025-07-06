import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { languageDetectorPlugin } from '@shared/lib/helpers';
import { resources } from './resources';

i18n
  .use(languageDetectorPlugin)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    compatibilityJSON: 'v3',
    resources,
    defaultNS: 'common',
    ns: ['common'],
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export { i18n };
