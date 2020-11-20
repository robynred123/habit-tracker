import { applyMiddleware, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { rootReducer } from './src/reducers';

export const configureStore = () => { 
    //const middleware = applyMiddleware(ReduxThunk);
    const store = createStore( rootReducer, compose(applyMiddleware(ReduxThunk)));

    return store;
}