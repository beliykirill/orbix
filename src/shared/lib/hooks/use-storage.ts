import AsyncStorage from '@react-native-async-storage/async-storage';

interface AsyncStorageWrapper {
  removeItem: (key: string) => Promise<void>;
  getItem: <GI>(key: string) => Promise<GI | null>;
  getMultipleItems: <GMI>(keys: string[]) => Promise<(GMI | null)[]>;
  setItem: <SI>(key: string, value: SI) => Promise<void>;
  clearAll: () => Promise<void>;
}

export const useStorage = (): AsyncStorageWrapper => {
  const setItem = async <SI>(key: string, value: SI): Promise<void> => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {}
  };

  const getItem = async <GI>(key: string): Promise<GI | null> => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value != null ? JSON.parse(value) : null;
    } catch (error) {
      return null;
    }
  };

  const getMultipleItems = async <GMI>(
    keys: string[],
  ): Promise<(GMI | null)[]> => {
    try {
      const values = await AsyncStorage.multiGet(keys);

      return values.map(([_, value]) =>
        value !== null ? JSON.parse(value) : null,
      );
    } catch (error) {
      return keys.map(() => null);
    }
  };

  const removeItem = async (key: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {}
  };

  const clearAll = async (): Promise<void> => {
    try {
      await AsyncStorage.clear();
    } catch (error) {}
  };

  return {
    setItem,
    getItem,
    getMultipleItems,
    removeItem,
    clearAll,
  };
};
