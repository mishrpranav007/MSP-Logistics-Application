import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from 'app/containers/LoginScreen/';
import HomePage from 'app/components/HomePage/';
import DeliveryDetails from 'app/components/DeliveryDetails/';
const StackNavigator = createStackNavigator(
  {
    MainScreen: LoginScreen,
    HomeScreen: HomePage,
    DeliveryScreen: DeliveryDetails
  },
  {
    initialRouteName: 'DeliveryScreen',
    headerMode: 'none'
  }
);

export default createAppContainer(StackNavigator);
