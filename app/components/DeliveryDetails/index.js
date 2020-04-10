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
import PropTypes from 'prop-types';
import Mask from 'react-native-mask';
import addimage from 'app/assets/images/addimage.png';
import Style from '../../style/index';

const DeliveryDetails = ({ intl, navigation }) => (
  <ImageBackground
    resizeMode="cover"
    source={deliverydetailsimage}
    style={styles.backgroundContainer}
  >
    <View style={styles.textContainer}>
      <Text style={styles.textView}>
        {intl.formatMessage({ id: 'john_smith' })}
      </Text>
      <View style={styles.textUnderlineView}></View>
      <Text style={styles.deliveryDetailsText}>
        {intl.formatMessage({ id: 'delivery_details' })}
      </Text>
      <View style={styles.borderLine}></View>
      <View style={styles.RectangleShapeView}>
        <Text style={styles.customerText}>
          {intl.formatMessage({ id: 'customer_name' })}
        </Text>
        <Text style={styles.customernameText}>
          {intl.formatMessage({ id: 'sarah_jane' })}
        </Text>
      </View>

      <View style={styles.shapeSize}>
        <Mask shape="rounded">
          <Image source={addimage} style={styles.addimageview}></Image>
          <Text style={styles.maskedText}>
            {intl.formatMessage({ id: 'add_bag' })}
          </Text>
        </Mask>
      </View>

      <View>
        <TouchableOpacity
          style={styles.markdeliveredButton}
          onPress={() => navigation.navigate('DeliveryScreen')}
        >
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
    fontSize: Style.em(1.125),
    marginTop: Style.em(1.8),
    marginLeft: Style.em(1),
    marginRight: Style.em(12.5)
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
    marginRight: Style.em(0.9),
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Style.em(19.5),
    width: Style.em(19),
    borderRadius: Style.em(0.8),
    marginTop: Style.em(2),
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
    zIndex: 100
  },
  text: {
    color: Style.WHITE_COLOR,
    fontSize: Style.em(1.12),
    textAlign: 'center'
  }
});
DeliveryDetails.propTypes = {
  intl: PropTypes.object,
  navigation: PropTypes.object
};
export default injectIntl(DeliveryDetails);
