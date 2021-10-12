/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 * https://docs.expo.io/guides/linking/
 */

import { makeUrl } from 'expo-linking';
import { LinkingOptions } from '@react-navigation/native';

export default {
  prefixes: [makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
} as LinkingOptions;
