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
const HomePage = () => (
  <ImageBackground source={homepage} style={styles.backgroundContainer}>
    <View>
      <Image source={logo} style={styles.logoContainer}></Image>
    </View>
    <View style={styles.scanimagecontainer}>
      <Image source={scanimage}></Image>
    </View>

    <View>
      <TouchableOpacity style={styles.deliverybtnLogin}>
        <View style={styles.bitimagecontainer}>
          <Image source={bitmapimage} style={styles.bitmapimageIcon}></Image>
          <Text style={styles.text}>Scan for delivery</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.pickupbtnLogin}>
        <View style={styles.bitimagecontainer}>
          <Image source={bitmapimage} style={styles.bitmapimageIcon}></Image>
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
    width: null,
    height: null,
    alignItems: 'center',
    flexDirection: 'column'
  },
  logoContainer: {
    width: 173,
    height: 51,
    marginTop: 0,
    marginLeft: 92,
    marginRight: 88,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 88
  },
  scanimagecontainer: {
    width: 309,
    height: 255,
    marginBottom: 8,
    marginTop: 8
  },
  deliverybtnLogin: {
    width: 310,
    height: 52,
    marginTop: 30,
    justifyContent: 'center',
    backgroundColor: 'rgb(36,106,116)',
    borderRadius: 11
  },
  pickupbtnLogin: {
    width: 310,
    height: 52,
    justifyContent: 'center',
    backgroundColor: 'rgb(36,106,116)',
    marginTop: 20,
    borderRadius: 11,
    marginBottom: 12,
    borderTopColor: '1px solid rgba(19,43,46,0.83)',
    zIndex: 100
  },
  text: {
    color: 'rgb(255,255,255)',
    fontSize: 18,
    textAlign: 'center'
  },
  bitimagecontainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  bitmapimageIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginBottom: 2,
    opacity: 1
  }
});
export default HomePage;
