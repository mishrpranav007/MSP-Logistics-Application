import React from 'react';
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
import delivery from 'app/assets/images/delivery.png';
import PropTypes from 'prop-types';
import Style from '../../style/index';

const DeliveryDetails = ({ intl }) => (
  <ImageBackground
    source={deliverydetailsimage}
    style={styles.backgroundContainer}
  >
    <View style={styles.textContainer}>
      <Text style={styles.textView}>Jhon Smith</Text>
      <Text style={styles.deliveryDetailsText}>Delivery Details</Text>
      <View style={styles.borderLine}></View>
      <View style={styles.RectangleShapeView}>
        <Text style={styles.customerText}>Customer Name</Text>
        <Text style={styles.customernameText}>Sarah Jane</Text>
      </View>

      <View>
        <Image style={styles.shapeSize} source={delivery} />
      </View>

      <View>
        <TouchableOpacity style={styles.markdeliveredButton}>
          <Text style={styles.text}>
            {intl.formatMessage({ id: 'mark_delivered' })}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </ImageBackground>
);
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1
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
    marginRight: Style.em(2.4),
    textDecorationLine: 'underline'
  },

  deliveryDetailsText: {
    color: Style.WHITE_COLOR,
    fontSize: Style.em(1.125),
    marginTop: Style.em(1.8),
    marginLeft: Style.em(1.31),
    marginRight: Style.em(13)
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  RectangleShapeView: {
    width: Style.em(19.5),
    height: Style.em(4.5),
    marginTop: Style.em(2),
    marginRight: Style.em(1.5),
    borderRadius: 8,
    backgroundColor: Style.WHITE_COLOR
  },
  customerText: {
    fontSize: Style.em(1),
    marginLeft: Style.em(1),
    marginTop: Style.em(0.2),
    textDecorationColor: Style.GRAY_COLOR
  },
  customernameText: {
    fontSize: Style.em(1.5),
    marginLeft: Style.em(1),
    marginTop: Style.em(0.8)
  },
  borderLine: {
    borderBottomColor: Style.WHITE_COLOR,
    borderBottomWidth: 1
  },
  shapeSize: {
    height: Style.em(19.5),
    width: Style.em(19),
    borderRadius: Style.em(0.8),
    marginTop: Style.em(2),
    marginRight: Style.em(1.89)
  },
  markdeliveredButton: {
    width: Style.em(19.4),
    height: Style.em(3.4),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Style.PRIMARY_COLOR,
    marginTop: Platform.OS === 'ios' ? Style.em(2.3) : Style.em(2),
    marginRight: Style.em(1.8),
    borderRadius: Style.em(0.69),
    marginBottom: Platform.OS === 'ios' ? Style.em(3.2) : Style.em(5),
    borderTopColor: Style.SECONDARY_COLOR,
    zIndex: 100
  },
  text: {
    color: Style.WHITE_COLOR,
    fontSize: Style.em(1.12),
    textAlign: 'center'
  }
});
DeliveryDetails.propTypes = {
  intl: PropTypes.object
};
export default injectIntl(DeliveryDetails);
