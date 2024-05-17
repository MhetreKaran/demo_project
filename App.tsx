import {View, Text} from 'react-native';
import React, {useState} from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import {store} from './src/redux/Store';
import persistStore from 'redux-persist/es/persistStore';
import {PersistGate} from 'redux-persist/integration/react';

let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
