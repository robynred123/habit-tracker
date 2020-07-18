import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import TaskScreen from './src/screens/TaskScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Tasks: TaskScreen,
    AddTasks: AddTaskScreen 
  },
  {
    initialRouteName: "Tasks",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
