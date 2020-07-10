import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import TaskScreen from './src/screens/TaskScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Tasks: TaskScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
