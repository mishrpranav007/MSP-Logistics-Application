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

  selectImageMethod = () => {
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
              {this.props.intl.formatMessage({ id: 'customer_name' })}
            </Text>
            <Text style={styles.customernameText}>
              {this.props.intl.formatMessage({ id: 'sarah_jane' })}
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
                  <TouchableOpacity onPress={this.selectImageMethod}>
                    <Image
                      source={addimage}
                      style={styles.addImageView}
                    ></Image>
                  </TouchableOpacity>

                  <Text style={styles.maskedText}>
                    {this.props.intl.formatMessage({ id: 'add_bag' })}
                  </Text>
                </View>
              )}
            </Mask>
          </View>

          <View>
            <TouchableOpacity
              style={styles.markDeliveredButton}
              onPress={() => this.props.navigation.navigate('DeliveryDetails')}
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
    height: Style.em(0.813),
    marginRight: Style.em(1)
  },
  textUnderlineView: {
    height: Style.em(0),
    width: Style.em(4.1),
    borderTopColor: Style.WHITE_COLOR,
    borderTopWidth: 1,
    marginTop: Style.em(0.3),
    marginRight: Style.em(1)
  },
  deliveryDetailsText: {
    color: Style.WHITE_COLOR,
    fontSize: Style.em(1.25),
    marginTop: Style.em(1.8),
    marginLeft: Style.em(1),
    marginRight: Style.em(12)
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rectangleShapeView: {
    width: Style.em(19.5),
    height: Style.em(5),
    marginTop: Style.em(2),
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
    marginTop: Style.em(2),
    marginRight: Style.em(1.3),
    backgroundColor: Style.POWDER_COLOR
  },
  addImageView: {
    marginLeft: Style.em(1.2)
  },
  maskedText: {
    marginBottom: Style.em(1.2),
    fontSize: Style.em(1.2),
    textDecorationColor: Style.PRIMARY_COLOR,
    marginTop: Style.em(5.2)
  },
  markDeliveredButton: {
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
    width: Style.em(19.5),
    height: Style.em(19)
  }
});
DeliveryDetails.propTypes = {
  intl: PropTypes.object,
  navigation: PropTypes.object
};
export default injectIntl(DeliveryDetails);
