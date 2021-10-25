import { AppProps } from 'next/dist/shared/lib/router/router';
import React from 'react';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { data } from 'redux/Reducer/Reducer';

export const rootReducer = combineReducers({
  data,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
