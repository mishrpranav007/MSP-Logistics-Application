import { Platform, Dimensions } from 'react-native';

export const isAndroid = () => Platform.OS !== 'ios';
export const getScreenWidth = () => Dimensions.get('window').width;
export const getScreenHeight = () => Dimensions.get('window').height;

export const getPlatformString = () => (isAndroid() ? 'android' : 'ios');
export const getFontFamily = font =>
  isAndroid() ? `Futura-${font}` : `FuturaStd-${font}`;

export const isScreenSmall = () => getScreenHeight() <= 550;
