import React from 'react';
import { renderWithIntl } from 'app/utils/testUtils';
import QRCodeScanner from 'react-native-qrcode-scanner';
import ScanCode from '../index';

describe('<ScanCode />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(<ScanCode />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain 1 scancode screen component', () => {
    const { getAllByTestId } = renderWithIntl(<ScanCode />);
    expect(getAllByTestId('scan-code').length).toBe(1);
  });
  it('should contain 1 qrcodescanner contained  within', () => {
    const { getAllByTestId } = renderWithIntl(
      <ScanCode>
        <QRCodeScanner />
      </ScanCode>
    );
    expect(getAllByTestId('scan-code').length).toBe(1);
  });
});
