import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function logCurrentStorage(): Promise<void> {
  const keys = await AsyncStorage.getAllKeys();

  const stores = await AsyncStorage.multiGet(keys);

  stores.forEach((result, i, store) => {
    console.info({ [store[i][0]]: store[i][1] });
    return true;
  });
}
