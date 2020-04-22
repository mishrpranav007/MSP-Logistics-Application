import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native';
import { injectIntl } from 'react-intl';
import pickupdetailsimage from 'app/assets/images/Pickupdetails.png';
import PropTypes from 'prop-types';
import Mask from 'react-native-mask';
import addimage from 'app/assets/images/addimage.png';
import ImagePicker from 'react-native-image-picker';
import { Dropdown } from 'react-native-material-dropdown';
import Style from '../../style/index';

class PickupDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: null
    };
  }

  handleChoosePhoto = () => {
    const options = {
      noData: true
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
  };

  render() {
    const { photo } = this.state;
    const data = [
      { value: this.props.intl.formatMessage({ id: 'bag_damaged' }) },
      { value: this.props.intl.formatMessage({ id: 'bag_dirty' }) },
      { value: this.props.intl.formatMessage({ id: 'icepack_missing' }) },
      { value: this.props.intl.formatMessage({ id: 'icepack_missed' }) }
    ];
    return (
      <ImageBackground
        resizeMode="cover"
        source={pickupdetailsimage}
        style={styles.backgroundContainer}
      >
        <View style={styles.textContainer}>
          <Text style={styles.textView}>
            {this.props.intl.formatMessage({ id: 'john_smith' })}
          </Text>
          <View style={styles.textUnderlineView}></View>
          <Text style={styles.deliveryDetailsText}>
            {this.props.intl.formatMessage({ id: 'delivery_details' })}
          </Text>
          <View style={styles.borderLine}></View>
          <View style={styles.rectangleShapeView}>
            <Text style={styles.customerText}>
              {' '}
              {this.props.intl.formatMessage({ id: 'sarah_jane' })}
            </Text>
            <Text style={styles.customernameText}>
              {this.props.intl.formatMessage({ id: 'bag_number' })}
            </Text>
          </View>

          <View style={styles.shapeSize}>
            <Mask shape="rounded">
              {photo && (
                <Image
                  style={styles.shapeSizeImage}
                  source={{ uri: photo.uri }}
                />
              )}

              {!photo && (
                <View>
                  <TouchableOpacity onPress={this.handleChoosePhoto}>
                    <Image
                      source={addimage}
                      style={styles.addimageview}
                    ></Image>
                  </TouchableOpacity>

                  <Text style={styles.maskedText}>
                    {' '}
                    {this.props.intl.formatMessage({ id: 'add_bag' })}
                  </Text>
                </View>
              )}
            </Mask>
          </View>

          <View style={styles.checkboxRectangleView}>
            <Text style={styles.selectText}>
              {' '}
              {this.props.intl.formatMessage({ id: 'select_status' })}
            </Text>
            <View style={styles.dropdownContainer}>
              <Dropdown data={data} style={styles.dropdownView} />
            </View>
          </View>

          <View>
            <TouchableOpacity
              testID="pick-up-details-button"
              style={styles.markPickupButton}
              disabled={!this.state.photo}
              onPress={() => this.props.navigation.navigate('PickupScreen')}
            >
              <Text style={styles.text}>
                {this.props.intl.formatMessage({ id: 'mark_picked' })}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  backgroundContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: Style.em(5),
    marginLeft: Style.em(1)
  },
  textView: {
    color: Style.WHITE_COLOR,
    height: Style.em(1),
    marginTop: Style.em(0.3),
    marginRight: Style.em(2)
  },
  textUnderlineView: {
    height: Style.em(0),
    width: Style.em(4.1),
    borderTopColor: Style.WHITE_COLOR,
    borderTopWidth: 1,
    marginTop: Style.em(0.3),
    marginRight: Style.em(2)
  },
  deliveryDetailsText: {
    color: Style.WHITE_COLOR,
    fontSize: Style.em(1.12),
    marginTop: Style.em(0.3),
    marginLeft: Style.em(0.4),
    marginRight: Style.em(13.4)
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rectangleShapeView: {
    width: Style.em(19.5),
    height: Style.em(4.5),
    marginTop: Platform.OS === 'ios' ? Style.em(1.1) : Style.em(0.9),
    marginRight: Style.em(1.4),
    borderRadius: 8,
    backgroundColor: Style.WHITE_COLOR
  },
  customerText: {
    fontSize: Style.em(1),
    marginLeft: Style.em(1),
    marginTop: Style.em(0.7),
    textDecorationColor: Style.GRAY_COLOR
  },
  customernameText: {
    fontSize: Style.em(1.65),
    marginLeft: Style.em(1),
    marginTop: Style.em(0.1),
    textDecorationColor: Style.GRAY_COLOR
  },
  borderLine: {
    borderBottomColor: Style.WHITE_COLOR,
    borderBottomWidth: 1
  },
  shapeSize: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Style.em(19.5),
    width: Style.em(19),
    borderRadius: Style.em(0.8),
    marginTop: Platform.OS === 'ios' ? Style.em(1.5) : Style.em(0.9),
    marginRight: Style.em(1.6),
    backgroundColor: Style.POWDER_COLOR
  },
  addimageview: {
    marginLeft: Style.em(1.2)
  },
  maskedText: {
    marginBottom: Style.em(1.2),
    fontSize: Style.em(1.2),
    textDecorationColor: Style.PRIMARY_COLOR,
    marginTop: Style.em(5.2)
  },
  iconView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: Style.em(7),
    marginLeft: Style.em(1)
  },
  checkboxRectangleView: {
    width: Style.em(18),
    height: Style.em(2.1),
    marginTop: Style.em(1),
    marginRight: Style.em(1.98),
    backgroundColor: Style.WHITE_COLOR,
    borderRadius: Style.em(0.25)
  },
  selectText: {
    marginTop: Style.em(0.5),
    marginLeft: Style.em(0.7),
    textDecorationColor: Style.SELECT_COLOR
  },
  markPickupButton: {
    width: Style.em(20),
    height: Style.em(3.2),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Style.PRIMARY_COLOR,
    marginTop: Platform.OS === 'ios' ? Style.em(1.5) : Style.em(1.1),
    marginRight: Style.em(1.3),
    borderRadius: Style.em(0.69),
    marginBottom: Platform.OS === 'ios' ? Style.em(3.2) : Style.em(5),
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
    fontSize: Style.em(1.12),
    textAlign: 'center'
  },
  shapeSizeImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: Style.em(19.5),
    height: Style.em(19)
  },
  dropdownContainer: {
    flex: 1
  },
  dropdownView: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: Style.em(0.9),
    width: Style.em(10),
    height: Style.em(5),
    marginBottom: Style.em(10)
  }
});
PickupDetails.propTypes = {
  intl: PropTypes.object,
  navigation: PropTypes.object
};
export default injectIntl(PickupDetails);
