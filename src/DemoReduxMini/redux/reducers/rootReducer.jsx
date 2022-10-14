import { combineReducers } from "redux";
import { numberReducer } from "./numberReducer";

export let rootReducer__DemoReduxMini = combineReducers({
  number: numberReducer,
});
