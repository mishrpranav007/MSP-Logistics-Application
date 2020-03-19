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
import { injectIntl } from 'react-intl';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from 'app/assets/images/imgMspLogo.png';
import deliveryboyimage from 'app/assets/images/illoDeliveryBoy.png';
import homepage from 'app/assets/images/loginbg.jpg';
import DismissableKeyboard from 'app/components/DismissKeyboard/';

import PropTypes from 'prop-types';
import Style from '../../style/index';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  validateField = () => {
    const { email, password } = this.state;
    if (email === '' && password === '') {
      alert('Please input both fields');
      return false;
    }
    if (email === '' && password !== '') {
      alert('Please fill email');
      return false;
    }
    if (email !== '' && password === '') {
      alert('Please fill password');
      return false;
    }
    if (email.length < 5) {
      alert('Email should be at least 5 characters long');
      return false;
    }
    if (email.split('').filter(x => x === '@').length !== 1) {
      alert('Email should contain a @');
      return false;
    }
    if (email.indexOf('.') === -1) {
      alert('Email should contain at least one dot');
      return false;
    }

    if (password.length < 6) {
      alert('Password should be at least 6 characters long');
      return false;
    }

    return true;
  };

  handleSubmit = () => {
    if (this.validateField()) {
      alert('Successfully login');
    }
  };

  render() {
    return (
      <ImageBackground source={homepage} style={styles.backgroundContainer}>
        <DismissableKeyboard>
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.Os === 'ios' ? 'padding' : 'position'}
            enabled
          >
            <View>
              <Image source={logo} style={styles.logoContainer}></Image>
            </View>

            <View style={styles.deliveryboyImageContainer}>
              <Image source={deliveryboyimage}></Image>
            </View>

            <View>
              <Icon
                name="person-outline"
                size={Style.em(1.375)}
                color={Style.ICON_COLOR}
                style={styles.inputIcon}
              />
              <TextInput
                testID="log-in-screen-text-input"
                style={styles.input}
                placeholder={this.props.intl.formatMessage({
                  id: 'placeholder_email'
                })}
                returnKeyType="next"
                onSubmitEditing={() => {
                  this.secondTextInput.focus();
                }}
                placeholderTextColor={Style.WHITE_COLOR}
                onChangeText={value => this.setState({ email: value })}
              />
            </View>
            <View behavior="position">
              <Icon
                name="lock-outline"
                size={Style.em(1.375)}
                color={Style.ICON_COLOR}
                style={styles.inputIcon}
              />
              <TextInput
                testID="log-in-screen-text-input"
                ref={input => {
                  this.secondTextInput = input;
                }}
                style={styles.input}
                placeholder={this.props.intl.formatMessage({
                  id: 'placeholder_password'
                })}
                returnKeyType="go"
                placeholderTextColor={Style.WHITE_COLOR}
                onChangeText={value => this.setState({ password: value })}
              />
            </View>
            <TouchableOpacity
              style={styles.btnLogin}
              onPress={() => this.handleSubmit()}
            >
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
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
    flexDirection: 'column'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    width: Style.em(12.375),
    height: Style.em(3.313),
    marginTop: Style.em(3.125),
    marginLeft: Style.em(5.75),
    marginRight: Style.em(5.5),
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: Style.em(1)
  },
  deliveryboyImageContainer: {
    width: Style.em(15.563),
    height: Style.em(16),
    marginLeft: Style.em(7.68),
    marginTop: Style.em(0.813),
    marginBottom: Style.em(2.375),
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  input: {
    width: Style.em(16.875),
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginTop: Style.em(1.813),
    position: 'relative',
    marginLeft: Style.em(3.75),
    paddingLeft: Style.em(1.625),
    zIndex: 30,
    opacity: 0.94,
    color: Style.WHITE_COLOR,
    fontSize: Style.em(0.875)
  },
  btnLogin: {
    width: Style.em(19.375),
    height: Style.em(3),
    justifyContent: 'center',
    backgroundColor: Style.PRIMARY_COLOR,
    marginTop: Style.em(4.063),
    marginLeft: Style.em(2.313),
    borderRadius: Style.em(0.688),
    marginBottom: Style.em(3.25),
    borderTopColor: '1px solid rgba(19,43,46,0.83)',
    zIndex: 100
  },
  text: {
    color: Style.WHITE_COLOR,
    fontSize: Style.em(1.125),
    textAlign: 'center'
  },
  inputIcon: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    marginLeft: Style.em(3.438),
    justifyContent: 'space-between',
    opacity: 0.94
  }
});

LoginScreen.propTypes = {
  intl: PropTypes.object
};
export default injectIntl(LoginScreen);
