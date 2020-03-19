import React from 'react';
import { renderWithIntl } from 'app/utils/testUtils';
import LoginScreen from '../index';

describe('<LoginScreen />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(<LoginScreen />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain 2 textinput component inside the Loginscreen', () => {
    const { getAllByTestId } = renderWithIntl(<LoginScreen />);
    expect(getAllByTestId('log-in-screen-text-input').length).toBe(2);
  });
});
