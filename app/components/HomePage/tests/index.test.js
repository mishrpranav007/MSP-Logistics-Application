import React from 'react';
import { renderWithIntl } from 'app/utils/testUtils';
import HomePage from '../index';

describe('<HomePage />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(<HomePage />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain 1 homepage screen component', () => {
    const { getAllByTestId } = renderWithIntl(<HomePage />);
    expect(getAllByTestId('home-page').length).toBe(1);
  });
  it('should contain 2 button component inside the homepage screen', () => {
    const { getAllByTestId } = renderWithIntl(<HomePage />);
    expect(getAllByTestId('home-page-view').length).toBe(2);
  });
});
