import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';

jest.mock('react-native-permissions', () => ({
  check: () => {},
  requests: () => {},
  PERMISSIONS: {
    IOS: {}
  },
  RESULTS: {}
}));
jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
console.disableYellowBox = true;
