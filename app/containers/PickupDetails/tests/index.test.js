import React from 'react';
import { renderWithIntl } from 'app/utils/testUtils';
import PickupDetails from '../index';

describe('<PickupDetails />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(<PickupDetails />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain 1 button component inside the pickupdetails screen', () => {
    const { getAllByTestId } = renderWithIntl(<PickupDetails />);
    expect(getAllByTestId('pick-up-details-button').length).toBe(1);
  });
});
