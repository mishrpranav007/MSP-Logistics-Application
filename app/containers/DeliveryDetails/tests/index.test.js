import React from 'react';
import { renderWithIntl } from 'app/utils/testUtils';
import DeliveryDetails from '../index';

describe('<PickupDetails />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(<DeliveryDetails />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain 1 button component inside the Deliverydetailsscreen', () => {
    const { getAllByTestId } = renderWithIntl(<DeliveryDetails />);
    expect(getAllByTestId('delivery-details-button').length).toBe(1);
  });
});
