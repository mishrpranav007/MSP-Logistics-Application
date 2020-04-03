import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { renderWithIntl } from 'app/utils/testUtils';
import LoginScreen from '../index';

describe('<LoginScreen />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(<LoginScreen />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain the 2 textinput component inside the Loginscreen', () => {
    const { getAllByTestId } = renderWithIntl(<LoginScreen />);
    expect(getAllByTestId('log-in-screen-text-input').length).toBe(2);
  });

  it('should have correct email value paased to it', () => {
    const emailText = 'abc123@gmail.com';
    const { getAllByTestId } = renderWithIntl(<LoginScreen />);
    fireEvent.changeText(
      getAllByTestId('log-in-screen-text-input')[0],
      emailText
    );
    expect(getAllByTestId('log-in-screen-text-input')[0].props.value).toMatch(
      emailText
    );
  });
  it('should have correct password value paased to it', () => {
    const passwordText = 'qwerty123';
    const { getAllByTestId } = renderWithIntl(<LoginScreen />);
    fireEvent.changeText(
      getAllByTestId('log-in-screen-text-input')[1],
      passwordText
    );
    expect(getAllByTestId('log-in-screen-text-input')[1].props.value).toMatch(
      passwordText
    );
  });
});
