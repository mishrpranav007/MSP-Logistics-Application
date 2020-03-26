import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Platform
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { injectIntl } from 'react-intl';
import logo from 'app/assets/images/imgMspLogo.png';
import deliveryboyimage from 'app/assets/images/illoDeliveryBoy.png';
import homepage from 'app/assets/images/loginbg.jpg';
import username from 'app/assets/images/username.png';
import password from 'app/assets/images/password.png';
import DismissableKeyboard from 'app/components/DismissKeyboard/';
import PropTypes from 'prop-types';
import { HideWithKeyboard } from 'react-native-hide-with-keyboard';
import Style from '../../style/index';
class LoginScreen extends Component {
  render() {
    const onhandleLogin = () => {
      this.props.navigation.navigate('HomeScreen');
    };

    const keyboardVerticalOffset =
      Platform.OS === 'ios' ? Style.em(-14) : Style.em(-8);
    return (
      <ImageBackground source={homepage} style={styles.backgroundContainer}>
        <DismissableKeyboard>
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.Os === 'ios' ? 'padding' : 'position'}
            keyboardVerticalOffset={keyboardVerticalOffset}
            enabled
          >
            <HideWithKeyboard>
              <View>
                <Image source={logo} style={styles.logoContainer}></Image>
              </View>

              <View style={styles.deliveryboyImageContainer}>
                <Image source={deliveryboyimage}></Image>
              </View>
            </HideWithKeyboard>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={values => onhandleLogin(values)}
              validationSchema={yup.object().shape({
                email: yup
                  .string()
                  .email(this.props.intl.formatMessage({ id: 'email_valid' }))
                  .required(
                    this.props.intl.formatMessage({ id: 'email_required' })
                  ),

                password: yup
                  .string()
                  .min(
                    6,
                    this.props.intl.formatMessage({ id: 'password_minlength' })
                  )
                  .required(
                    this.props.intl.formatMessage({ id: 'password_required' })
                  )
              })}
            >
              {({
                values,
                handleChange,
                errors,
                setFieldTouched,
                touched,
                handleSubmit
              }) => (
                <View>
                  <View>
                    <Image
                      source={username}
                      style={styles.inputImageContainer}
                    ></Image>
                    <TextInput
                      testID="log-in-screen-text-input"
                      value={values.email}
                      style={styles.input}
                      placeholder={this.props.intl.formatMessage({
                        id: 'placeholder_email'
                      })}
                      onBlur={() => setFieldTouched('email')}
                      returnKeyType="next"
                      onSubmitEditing={() => {
                        this.secondTextInput.focus();
                      }}
                      placeholderTextColor={Style.WHITE_COLOR}
                      onChangeText={handleChange('email')}
                    />
                  </View>
                  <View>
                    {touched.email && errors.email && (
                      <Text
                        style={{
                          position: 'relative',
                          marginLeft: Style.em(3),
                          marginTop: Style.em(0.3),
                          color: 'red'
                        }}
                      >
                        {errors.email}
                      </Text>
                    )}
                  </View>
                  <View behavior="position">
                    <Image
                      source={password}
                      style={styles.inputImageContainer}
                    ></Image>
                    <TextInput
                      testID="log-in-screen-text-input"
                      value={values.password}
                      ref={input => {
                        this.secondTextInput = input;
                      }}
                      style={styles.input}
                      placeholder={this.props.intl.formatMessage({
                        id: 'placeholder_password'
                      })}
                      returnKeyType="go"
                      secureTextEntry
                      placeholderTextColor={Style.WHITE_COLOR}
                      onChangeText={handleChange('password')}
                      onBlur={() => setFieldTouched('password')}
                    />
                  </View>
                  <View>
                    {touched.password && errors.password && (
                      <Text
                        style={{
                          color: 'red',
                          position: 'relative',
                          marginLeft: Style.em(3),
                          marginTop: Style.em(0.4)
                        }}
                      >
                        {errors.password}
                      </Text>
                    )}
                  </View>
                  <View style={styles.btnLogin}>
                    <TouchableOpacity
                      // style={styles.btnLogin}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.text}>
                        {this.props.intl.formatMessage({ id: 'login' })}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
          </KeyboardAvoidingView>
        </DismissableKeyboard>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    opacity: 0.94
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    marginTop: Platform.OS === 'ios' ? Style.em(3.13) : Style.em(5.1),
    marginLeft: Style.em(5.7),
    marginRight: Style.em(5.5),
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: Style.em(1)
  },
  deliveryboyImageContainer: {
    width: Style.em(15.56),
    height: Style.em(16),
    marginLeft: Style.em(7),
    marginTop: Style.em(0.81),
    marginBottom: Platform.OS === 'ios' ? Style.em(2.38) : Style.em(1.5),
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  input: {
    width: Style.em(17),
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: Style.WHITE_COLOR,
    marginTop: Platform.OS === 'ios' ? Style.em(1.81) : Style.em(0.92),
    position: 'relative',
    marginLeft: Style.em(3),
    paddingLeft: Style.em(1.62),
    paddingBottom: Platform.OS === 'android' ? Style.em(0) : null,
    zIndex: 30,
    opacity: 0.94,
    color: Style.WHITE_COLOR,
    fontSize: Platform.OS === 'ios' ? Style.em(0.87) : Style.em(1)
  },
  btnLogin: {
    // flex: 1,
    width: Style.em(19.4),
    height: Style.em(3),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Style.PRIMARY_COLOR,
    marginTop: Platform.OS === 'ios' ? Style.em(3.06) : Style.em(2),
    marginLeft: Style.em(1.8),
    borderRadius: Style.em(0.69),
    marginBottom: Platform.OS === 'ios' ? Style.em(3.25) : Style.em(5),
    borderTopColor: Style.SECONDARY_COLOR,
    zIndex: 100
  },
  text: {
    color: Style.WHITE_COLOR,
    fontSize: Style.em(1.12),
    textAlign: 'center'
  },
  inputImageContainer: {
    position: 'absolute',
    left: 0,
    borderColor: Style.WHITE_COLOR,
    bottom: Style.em(0.31),
    right: Style.em(0.63),
    marginLeft: Style.em(3),
    height: Style.em(1.08),
    width: Style.em(0.91),
    justifyContent: 'center',
    opacity: 0.94
  }
});

LoginScreen.propTypes = {
  intl: PropTypes.object,
  navigation: PropTypes.object
};
export default injectIntl(LoginScreen);
