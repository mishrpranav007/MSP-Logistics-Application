import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Linking,
  Image,
  TouchableOpacity
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import flashimage from 'app/assets/images/flash.png';
import cancelimage from 'app/assets/images/Cancel_illo.png';
import PropTypes from 'prop-types';
import Style from '../../style/index';
export default class ScanCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      torchEnable: false
    };
  }

  onSuccess = e => {
    Linking.openURL(e.data);
  };

  torchEnableMethod = () => {
    if (this.state.torchEnable === false) {
      this.setState({ torchEnable: true });
    } else {
      this.setState({ torchEnable: false });
    }
  };

  handleCancelMethod = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { torchEnable } = this.state;
    return (
      <View style={styles.Container}>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={this.torchEnableMethod}>
            <Image source={flashimage} style={styles.imageContainer}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleCancelMethod}>
            <Image
              source={cancelimage}
              style={styles.cancelimageContainer}
            ></Image>
          </TouchableOpacity>
        </View>
        <QRCodeScanner
          containerStyle={styles.cameraContainer}
          onRead={this.onSuccess}
          showMarker
          reactivate
          checkAndroid6Permissions
          flashMode={
            torchEnable
              ? RNCamera.Constants.FlashMode.torch
              : RNCamera.Constants.FlashMode.off
          }
          customMarker={
            <View style={styles.rectangleContainer}>
              <View style={styles.rectangle} />
            </View>
          }
          cameraStyle={styles.cameraView}
          cameraProps={{ ratio: '1:1' }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.99
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',

    marginTop: Style.em(11)
  },
  cameraView: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
    height: Style.em(14),
    width: Style.em(13),
    borderRadius: 10,
    marginTop: Style.em(-0.7)
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginTop: Style.em(-0.4)
  },
  rectangle: {
    alignItems: 'center',
    overflow: 'visible',
    justifyContent: 'center',
    height: Style.em(17.5),
    width: Style.em(17.5),
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 12,
    backgroundColor: 'transparent'
  },

  imageContainer: {
    marginTop: Style.em(1),
    marginLeft: Style.em(1)
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cancelimageContainer: {
    marginRight: Style.em(1),
    marginTop: Style.em(1.2)
  }
});
ScanCode.propTypes = {
  navigation: PropTypes.object
};
