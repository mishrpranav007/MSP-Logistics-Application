import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import homepage from 'app/assets/images/homepage.png';
import logo from 'app/assets/images/imgMspLogo.png';
import scanimage from 'app/assets/images/illoScanBag.png';
import bitmapimage from 'app/assets/images/bitmap.png';
import Style from '../../style/index';
const HomePage = () => (
  <ImageBackground
    testID="home-page"
    source={homepage}
    style={styles.backgroundContainer}
  >
    <View style={styles.logoView}>
      <Image source={logo} style={styles.logoContainer}></Image>
    </View>
    <View style={styles.scanimageContainer}>
      <Image source={scanimage}></Image>
    </View>

    <View>
      <TouchableOpacity style={styles.deliveryButtonLogin}>
        <View testID="home-page-view" style={styles.bitImageContainer}>
          <Image source={bitmapimage} style={styles.bitmapImageIcon}></Image>
          <Text style={styles.text}>Scan for delivery</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.pickupButtonLogin}>
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
    width: Style.em(12),
    height: Style.em(3),
    marginTop: Style.em(0.5),
    marginLeft: Style.em(5.75),
    marginRight: Style.em(5.5),
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: Style.em(5.5)
  },
  scanimageContainer: {
    width: Style.em(19.313),
    height: Style.em(15.938),
    marginBottom: Style.em(0.5),
    marginTop: Style.em(0.5)
  },
  deliveryButtonLogin: {
    width: Style.em(18.5),
    height: Style.em(3.25),
    marginTop: Style.em(1.875),
    justifyContent: 'center',
    backgroundColor: Style.PRIMARY_COLOR,
    borderRadius: 11
  },
  pickupButtonLogin: {
    width: Style.em(18.5),
    height: Style.em(3.25),
    justifyContent: 'center',
    backgroundColor: Style.PRIMARY_COLOR,
    marginTop: Style.em(1.25),
    borderRadius: Style.em(0.69),
    marginBottom: Style.em(0.75),
    borderTopColor: '1px solid rgba(19,43,46,0.83)',
    zIndex: 100
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
    width: Style.em(1.234),
    height: Style.em(1.114),
    marginRight: Style.em(0.625),
    marginBottom: Style.em(0.125),
    opacity: 1
  }
});
export default HomePage;
