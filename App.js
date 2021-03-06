import React from 'react';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { configureStore } from './configureStore';

const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App;