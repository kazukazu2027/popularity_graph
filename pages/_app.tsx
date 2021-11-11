import { AppProps } from 'next/dist/shared/lib/router/router';
import React from 'react';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import store, { persistor } from 'redux/Store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
