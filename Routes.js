import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import TaskScreen from './src/screens/TaskScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';
import EditTaskScreen from './src/screens/EditTaskScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Tasks: TaskScreen,
    AddTasks: AddTaskScreen,
    EditTasks: EditTaskScreen
  },
  {
    initialRouteName: "Tasks",
    defaultNavigationOptions: {
      title: "Habit Rabbit"
    }
  }
);

export default createAppContainer(navigator);
