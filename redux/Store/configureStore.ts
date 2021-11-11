import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { data } from 'redux/Reducer/Reducer';

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
}
declare const window: ExtendedWindow;

export const rootReducer = combineReducers({
  data,
});

export type RootState = ReturnType<typeof rootReducer>;

// 永続化の設定
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data'],
};

// 永続化設定されたReducerとして定義
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: any = createStore(
  persistedReducer,
  process.browser && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export const persistor = persistStore(store);
export default store;
