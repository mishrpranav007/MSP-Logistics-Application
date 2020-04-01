import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import homepage from 'app/assets/images/homepage.png';
import logo from 'app/assets/images/imgMspLogo.png';
import scanimage from 'app/assets/images/illoScanBag.png';
import bitmapimage from 'app/assets/images/bitmapImage.png';
import Style from '../../style/index';
const HomePage = ({ navigation }) => (
  <ImageBackground
    testID="home-page"
    source={homepage}
    style={styles.backgroundContainer}
  >
    <View style={styles.logoView}>
      <Image source={logo} style={styles.logoContainer}></Image>
    </View>
    <View style={styles.scanImageContainer}>
      <Image source={scanimage}></Image>
    </View>

    <View>
      <TouchableOpacity
        style={styles.deliveryButtonLogin}
        onPress={() => navigation.navigate('DeliveryScreen')}
      >
        <View testID="home-page-view" style={styles.bitImageContainer}>
          <Image source={bitmapimage} style={styles.bitmapImageIcon}></Image>
          <Text style={styles.text}>Scan for delivery</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.pickupButtonLogin}
        onPress={() => navigation.navigate('PickupScreen')}
      >
        <View testID="home-page-view" style={styles.bitImageContainer}>
          <Image source={bitmapimage} style={styles.bitmapImageIcon}></Image>
          <Text style={styles.text}>Scan for pickup</Text>
        </View>
      </TouchableOpacity>
    </View>
  </ImageBackground>
);
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },

  logoContainer: {
    marginTop: Style.em(0.5),
    marginLeft: Style.em(5.75),
    marginRight: Style.em(5.5),
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: Style.em(5.5)
  },
  scanImageContainer: {
    width: Style.em(19.31),
    height: Style.em(15.94),
    marginBottom: Style.em(0.5),
    marginTop: Style.em(0.5)
  },
  deliveryButtonLogin: {
    width: Style.em(18.5),
    height: Style.em(3.25),
    marginTop: Style.em(1.87),
    justifyContent: 'center',
    backgroundColor: Style.PRIMARY_COLOR,
    borderRadius: Style.em(0.69),
    borderTopColor: Style.SECONDARY_COLOR,
    shadowColor: Style.WHITE_COLOR,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.35,
    shadowRadius: 13.16,

    elevation: 20
  },
  pickupButtonLogin: {
    width: Style.em(18.5),
    height: Style.em(3.25),
    justifyContent: 'center',
    backgroundColor: Style.PRIMARY_COLOR,
    marginTop: Style.em(1.25),
    borderRadius: Style.em(0.69),
    marginBottom: Style.em(0.75),
    borderTopColor: Style.SECONDARY_COLOR,
    zIndex: 100,
    shadowColor: Style.WHITE_COLOR,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.35,
    shadowRadius: 13.16,

    elevation: 20
  },
  text: {
    color: Style.WHITE_COLOR,
    fontSize: Style.em(1),
    textAlign: 'center'
  },
  bitImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  bitmapImageIcon: {
    width: Style.em(1.25),
    height: Style.em(1.15),
    marginRight: Style.em(0.62),
    marginBottom: Style.em(0.13),
    opacity: 1
  }
});
HomePage.propTypes = {
  navigation: PropTypes.object
};
export default HomePage;
