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
import Icon from 'react-native-vector-icons/Ionicons';
import logo from 'app/assets/images/imgMspLogo.png';
import deliveryboyimage from 'app/assets/images/illoDeliveryBoy.png';
import background from 'app/assets/images/background.png';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ' ',
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
      <ImageBackground source={background} style={styles.backgroundContainer}>
        <View>
          <Image source={logo} style={styles.logoContainer}></Image>
        </View>
        <View style={styles.deliveryboyimagecontainer}>
          <Image source={deliveryboyimage}></Image>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.Os === 'ios' ? 'padding' : 'position'}
          enabled
        >
          <View>
            <Icon
              name="ios-person"
              size={20}
              color="rgba(255,255,255,0.7)"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your email address"
              placeholderTextColor="rgb(255,255,255)"
              onChangeText={value => this.setState({ email: value })}
            />
          </View>
          <View behavior="position">
            <Icon
              name="ios-lock"
              size={20}
              color="rgba(255,255,255,0.7)"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter password"
              placeholderTextColor="rgb(255,255,255)"
              onChangeText={value => this.setState({ password: value })}
            />
          </View>
        </KeyboardAvoidingView>

        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => this.handleSubmit()}
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    width: null,
    height: null,
    alignItems: 'center',
    flexDirection: 'column'
  },
  logoContainer: {
    width: 192,
    height: 51,
    marginTop: 67,
    marginLeft: 92,
    marginRight: 88,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 8
  },
  deliveryboyimagecontainer: {
    width: 249,
    height: 256,
    marginLeft: 73,
    marginTop: 13,
    marginBottom: 38,
    marginRight: 0,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  input: {
    width: 270,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginTop: 29,
    position: 'relative',
    paddingLeft: 26,
    fontSize: 16,
    zIndex: 30,
    opacity: 0.94
  },
  btnLogin: {
    width: 310,
    height: 48,
    justifyContent: 'center',
    backgroundColor: 'rgb(36,106,116)',
    marginTop: 55,
    borderRadius: 11,
    marginBottom: 52,
    borderTopColor: '1px solid rgba(19,43,46,0.83)',
    zIndex: 11
  },
  text: {
    color: 'rgb(255,255,255)',
    fontSize: 16,
    textAlign: 'center'
  },
  inputIcon: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    marginBottom: 0,
    justifyContent: 'space-between',
    opacity: 0.94
  }
});
