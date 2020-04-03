import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from 'app/containers/LoginScreen/';
import HomePage from 'app/components/HomePage/';
import DeliveryDetails from 'app/containers/DeliveryDetails/';
import PickupDetails from 'app/containers/PickupDetails/';
import ScanCode from 'app/components/ScanCode/';
const StackNavigator = createStackNavigator(
  {
    ScanScreen: ScanCode,
    MainScreen: LoginScreen,
    HomeScreen: HomePage,
    DeliveryScreen: DeliveryDetails,
    PickupScreen: PickupDetails
  },
  {
    initialRouteName: 'ScanScreen',
    headerMode: 'none'
  }
);

export default createAppContainer(StackNavigator);
