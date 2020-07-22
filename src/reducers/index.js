import { combineReducers } from 'redux';
import taskReducer from './task';

export default combineReducers({
    app: taskReducer
});