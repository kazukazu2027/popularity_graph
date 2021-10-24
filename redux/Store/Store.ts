import { combineReducers, createStore } from "redux";
import { data } from "redux/Reducer/Reducer";

export type RootState = ReturnType<typeof data>;

export const rootReducer = combineReducers({
  data,
});

export const store = createStore(data);