import { combineReducers } from "redux";
import checkReducer from "./reducers/checkReducer";
export const rootReducer = combineReducers({
  checkReducer,
});
