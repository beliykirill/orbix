import { NativeModules, Platform } from 'react-native';
import { useStorage } from '@shared/lib/hooks';
import { ASYNC_STORAGE_VARIABLES } from '@shared/enums/global';

const getDeviceLanguage = () => {
  const language =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
      : NativeModules.I18nManager.localeIdentifier;

  return language ? language.split('_')[0] : 'en';
};

export const languageDetectorPlugin = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async function (callback: (lang: string) => void) {
    try {
      const { getItem } = useStorage();

      const deviceLanguage = getDeviceLanguage();
      const storageLanguage = await getItem<boolean>(
        ASYNC_STORAGE_VARIABLES.LANGUAGE,
      );

      callback(storageLanguage || deviceLanguage || 'en');
    } catch (e) {
      callback('en');
    }
  },
  cacheUserLanguage: async function (language: string) {
    try {
      const { setItem } = useStorage();

      setItem(ASYNC_STORAGE_VARIABLES.LANGUAGE, language);
    } catch (e) {}
  },
};
