/* eslint-disable no-undef */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-empty-function */
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// Use with React Native <= 0.63
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// Use this instead with React Native >= 0.64
// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  Reanimated.default.call = () => {};

  return Reanimated;
});
