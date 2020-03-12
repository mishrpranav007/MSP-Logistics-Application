import { createAppContainer, createStackNavigator } from 'react-navigation';
// import SplashScreen from 'app/components/SplashScreen/';
// import LoginScreen from 'app/containers/LoginScreen/';
import HomePage from 'app/components/HomePage/';
/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    // SplashScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    // LoginScreen,
    // HomePage,
    MainScreen: HomePage
  },
  {
    // By default the application will show the splash screen
    // initialRouteName: 'LoginScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none'
  }
);

export default createAppContainer(StackNavigator);
