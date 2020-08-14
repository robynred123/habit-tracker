import { applyMiddleware, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { rootReducer } from './src/reducers';

export default () => { 
    const middleware = [ReduxThunk];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
    let store = createStore(
        rootReducer, 
        {}, 
        composeEnhancers(applyMiddleware(...middleware))
    );

    return store;
}