import React from 'react';
import { Provider } from 'react-redux';
import store, { persister } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { AppProvider } from './src/context/AppContext';
import Router from './src/navigation/Router';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <AppProvider>
          <Router />
        </AppProvider>
      </PersistGate>
    </Provider>
  );
}
