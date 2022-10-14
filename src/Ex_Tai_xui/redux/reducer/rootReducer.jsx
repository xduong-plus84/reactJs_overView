import { combineReducers } from "redux";
import { xucXacReducer } from "./xucXacReducer";

export const rootReducer_TaiXiu = combineReducers({
  xucXacReducer: xucXacReducer,
});
