import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import logo from 'app/assets/images/imgMspLogo.png';
import deliveryboyimage from 'app/assets/images/illoDeliveryBoy.png';
import homepage from 'app/assets/images/background.png';

const LoginScreen = () => (
  <ImageBackground source={homepage} style={styles.backgroundContainer}>
    <View>
      <Image source={logo} style={styles.logoContainer}></Image>
    </View>
    <View style={styles.deliveryboyimagecontainer}>
      <Image source={deliveryboyimage}></Image>
    </View>
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
      />
    </View>
    <View>
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
      />
    </View>

    <TouchableOpacity style={styles.btnLogin}>
      <Text style={styles.text}>Login</Text>
    </TouchableOpacity>
  </ImageBackground>
);
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
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  input: {
    width: 270,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginTop: 20,
    position: 'relative',
    paddingLeft: 26,
    fontSize: 14
  },
  btnLogin: {
    width: 310,
    height: 48,
    justifyContent: 'center',
    backgroundColor: 'rgb(36,106,116)',
    marginTop: 48,
    borderRadius: 11,
    marginBottom: 55
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
    justifyContent: 'space-between'
  }
});
export default LoginScreen;
