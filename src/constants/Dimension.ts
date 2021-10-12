import { Dimensions } from 'react-native';

const { width, height, scale, fontScale } = Dimensions.get('window');

export default {
  window: {
    width,
    height,
    scale,
    fontScale,
  },
  isSmallDevice: width < 375,
};
