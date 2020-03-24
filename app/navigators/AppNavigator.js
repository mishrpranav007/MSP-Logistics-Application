import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from 'app/containers/LoginScreen/';
import HomePage from 'app/components/HomePage/';

const StackNavigator = createStackNavigator(
  {
    MainScreen: LoginScreen,
    HomeScreen: HomePage
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'none'
  }
);

export default createAppContainer(StackNavigator);
