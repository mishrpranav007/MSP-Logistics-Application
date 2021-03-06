import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import flashImage from 'app/assets/images/flash.png';
import cancelImage from 'app/assets/images/cancel.png';
import PropTypes from 'prop-types';
import Style from '../../style/index';
import GLOBALS from '../../constants/Globals';

export default class ScanCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      torchEnable: false
    };
  }

  onTorchToggle = () => {
    const { torchEnable } = this.state;
    this.setState({ torchEnable: !torchEnable });
  };

  onCancel = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { torchEnable } = this.state;
    const { navigation } = this.props;
    const checkParameterRoute = navigation.getParam('otherParam');
    const onSuccess = () => {
      if (checkParameterRoute === '101') {
        this.props.navigation.navigate(GLOBALS.DELIVERY_SCREEN);
      } else {
        this.props.navigation.navigate(GLOBALS.PICKUP_SCREEN);
      }
    };

    return (
      <View style={styles.container} testID="scan-code">
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={this.onTorchToggle}>
            <Image source={flashImage} style={styles.imageContainer}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onCancel}>
            <Image
              source={cancelImage}
              style={styles.cancelImageContainer}
            ></Image>
          </TouchableOpacity>
        </View>
        <QRCodeScanner
          testID="scan-code-qrcode-scanner"
          containerStyle={styles.cameraContainer}
          onRead={onSuccess}
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
  container: {
    flex: 1,
    backgroundColor: Style.BLACK_COLOR,
    opacity: 0.99
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Style.BLACK_COLOR,
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
    borderColor: Style.GREENISH_TEAL,
    borderRadius: 40,
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
  cancelImageContainer: {
    marginRight: Style.em(1),
    marginTop: Style.em(1.2)
  }
});
ScanCode.propTypes = {
  navigation: PropTypes.object
};
