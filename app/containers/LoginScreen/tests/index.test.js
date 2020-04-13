import React from 'react';
import { fireEvent, act } from '@testing-library/react-native';
import { renderWithIntl } from 'app/utils/testUtils';
import { Formik } from 'formik';
import TextInput from 'react-native';
import LoginScreen from '../index';

describe('<LoginScreen />', () => {
  const submitSpy = jest.fn();
  beforeEach(() => {
    submitSpy();
  });
  it('should render and match the snapshot', async () => {
    const { baseElement } = await renderWithIntl(<LoginScreen />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain the 2 textinput component inside the Loginscreen', async () => {
    const { getAllByTestId } = await renderWithIntl(<LoginScreen />);
    expect(getAllByTestId('log-in-screen-text-input').length).toBe(2);
  });
  it('should contain a login button component inside the Loginscreen', async () => {
    const { getAllByTestId } = await renderWithIntl(<LoginScreen />);
    expect(getAllByTestId('log-in-screen-button').length).toBe(1);
  });
  it('should have correct email value paased to it', async () => {
    const emailText = 'abc123@gmail.com';
    const { getAllByTestId } = renderWithIntl(
      <LoginScreen>
        <Formik initialValues={{ email: '', password: '' }} />
      </LoginScreen>
    );
    act(async () => {
      fireEvent.changeText(
        getAllByTestId('log-in-screen-text-input')[0],
        emailText
      );
    });
    expect(getAllByTestId('log-in-screen-text-input')[0].props.value).toEqual(
      emailText
    );
    expect(
      getAllByTestId('log-in-screen-text-input')[0].props.value
    ).not.toEqual(null);
  });
  it('should have correct password value paased to it', async () => {
    const passwordText = 'qwerty123';
    const { getAllByTestId } = renderWithIntl(
      <LoginScreen>
        <Formik initialValues={{ email: '', password: '' }} />
      </LoginScreen>
    );
    act(async () => {
      fireEvent.changeText(
        getAllByTestId('log-in-screen-text-input')[1],
        passwordText
      );
    });
    expect(getAllByTestId('log-in-screen-text-input')[1].props.value).toEqual(
      passwordText
    );
    expect(
      getAllByTestId('log-in-screen-text-input')[1].props.value
    ).not.toEqual(null);
  });
  it('should check whether setFielTouched method is getting called when onBlur even is triggered with email input', async () => {
    const { getAllByTestId } = renderWithIntl(
      <LoginScreen>
        <TextInput
          testID="log-in-screen-text-input"
          setFieldTouched={submitSpy}
        />
      </LoginScreen>
    );
    act(async () => {
      fireEvent.blur(getAllByTestId('log-in-screen-text-input')[0]);
    });
    expect(submitSpy).toHaveBeenCalled();
  });
  it('should check whether setFielTouched method is getting called when onBlur even is triggered with password input', async () => {
    const { getAllByTestId } = renderWithIntl(
      <LoginScreen>
        <TextInput
          testID="log-in-screen-text-input"
          setFieldTouched={submitSpy}
        />
      </LoginScreen>
    );
    act(async () => {
      fireEvent.blur(getAllByTestId('log-in-screen-text-input')[1]);
    });
    expect(submitSpy).toHaveBeenCalled();
  });
  it('should check whether handleChange method is getting called when email input is passed', async () => {
    const emailText = 'johndoe12@gmail.com';
    const { getAllByTestId } = renderWithIntl(
      <LoginScreen>
        <TextInput testID="log-in-screen-text-input" handleChange={submitSpy} />
      </LoginScreen>
    );
    act(async () => {
      fireEvent.changeText(
        getAllByTestId('log-in-screen-text-input')[0].props.value,
        emailText
      );
    });
    expect(submitSpy).toHaveBeenCalled();
  });
  it('should check whether handleChange method is getting called when password input is passed', async () => {
    const passwordText = 'abcdef123';
    const { getAllByTestId } = renderWithIntl(
      <LoginScreen>
        <TextInput testID="log-in-screen-text-input" handleChange={submitSpy} />
      </LoginScreen>
    );
    act(async () => {
      fireEvent.changeText(
        getAllByTestId('log-in-screen-text-input')[1].props.value,
        passwordText
      );
    });
    expect(submitSpy).toHaveBeenCalled();
  });
});
