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
import deliverydetailsimage from 'app/assets/images/Deliverydetails.png';
import PropTypes from 'prop-types';
import Mask from 'react-native-mask';
import addimage from 'app/assets/images/addimage.png';
import ImagePicker from 'react-native-image-picker';
import Style from '../../style/index';

class DeliveryDetails extends Component {
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
    return (
      <ImageBackground
        resizeMode="cover"
        source={deliverydetailsimage}
        style={styles.backgroundContainer}
      >
        <View style={styles.textContainer}>
          <Text style={styles.textView}>Jhon Smith</Text>
          <View style={styles.textUnderlineView}></View>
          <Text style={styles.deliveryDetailsText}>Delivery Details</Text>
          <View style={styles.borderLine}></View>
          <View style={styles.RectangleShapeView}>
            <Text style={styles.customerText}>Customer Name</Text>
            <Text style={styles.customernameText}>Sarah Jane</Text>
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

                  <Text style={styles.maskedText}>Add Bag photo</Text>
                </View>
              )}
            </Mask>
          </View>

          <View>
            <TouchableOpacity
              style={styles.markdeliveredButton}
              disabled={!this.state.photo}
              onPress={() => this.props.navigation.navigate('DeliveryScreen')}
            >
              <Text style={styles.text}>
                {this.props.intl.formatMessage({ id: 'mark_delivered' })}
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
    marginTop: Style.em(3)
  },
  textView: {
    color: Style.WHITE_COLOR,
    height: Style.em(1),
    marginTop: Style.em(0.9),
    marginRight: Style.em(1.5)
  },
  textUnderlineView: {
    height: Style.em(0),
    width: Style.em(4.1),
    borderTopColor: Style.WHITE_COLOR,
    borderTopWidth: 1,
    marginTop: Style.em(0.4),
    marginRight: Style.em(1.5)
  },
  deliveryDetailsText: {
    color: Style.WHITE_COLOR,
    fontSize: Style.em(1.25),
    marginTop: Style.em(0.8),
    marginLeft: Style.em(1),
    marginRight: Style.em(12)
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  RectangleShapeView: {
    width: Style.em(19.5),
    height: Style.em(5),
    marginTop: Style.em(1.2),
    marginRight: Style.em(0.9),
    borderRadius: 8,
    backgroundColor: Style.WHITE_COLOR
  },
  customerText: {
    fontSize: Style.em(1),
    marginLeft: Style.em(1),
    marginTop: Style.em(0.8),
    textDecorationColor: Style.GRAY_COLOR
  },
  customernameText: {
    fontSize: Style.em(1.8),
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
    height: Style.em(20),
    width: Style.em(19),
    borderRadius: Style.em(0.8),
    marginTop: Style.em(1.6),
    marginRight: Style.em(1.3),
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
  markdeliveredButton: {
    width: Style.em(20),
    height: Style.em(3.6),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Style.PRIMARY_COLOR,
    marginTop: Platform.OS === 'ios' ? Style.em(2) : Style.em(2),
    marginRight: Style.em(0.8),
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
    width: Style.em(19),
    height: Style.em(20)
  }
});
DeliveryDetails.propTypes = {
  intl: PropTypes.object,
  navigation: PropTypes.object
};
export default injectIntl(DeliveryDetails);
