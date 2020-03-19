import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

// eslint-disable-next-line react/prop-types
const DismissableKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
export default DismissableKeyboard;
