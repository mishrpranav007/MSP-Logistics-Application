import React from 'react';
import { renderWithIntl } from 'app/utils/testUtils';
import QRCodeScanner from 'react-native-qrcode-scanner';
import ScanCode from '../index';

describe('<ScanCode />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(
      <ScanCode navigation={{ getParam: jest.fn() }} />
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain 1 scancode screen component', () => {
    const { getAllByTestId } = renderWithIntl(
      <ScanCode navigation={{ getParam: jest.fn() }} />
    );
    expect(getAllByTestId('scan-code').length).toBe(1);
  });
  it('should contain 1 qrcodescanner contained  within', () => {
    const { getAllByTestId } = renderWithIntl(
      <ScanCode navigation={{ getParam: jest.fn() }}>
        <QRCodeScanner />
      </ScanCode>
    );
    expect(getAllByTestId('scan-code').length).toBe(1);
  });
});
