import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from 'app/containers/LoginScreen/';
import HomePage from 'app/components/HomePage/';
import ScanCode from 'app/components/ScanCode/';
import DeliveryDetails from 'app/containers/DeliveryDetails/';
const StackNavigator = createStackNavigator(
  {
    ScanScreen: ScanCode,
    MainScreen: LoginScreen,
    HomeScreen: HomePage,
    DeliveryScreen: DeliveryDetails
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'none'
  }
);

export default createAppContainer(StackNavigator);
