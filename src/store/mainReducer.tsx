import { combineReducers } from "redux";

import hotelsReducer from "./hotelsReducer";
import loginReducer from "./loginReducer";

import { InitialStateHotels } from "./hotelsReducer";
import { InitialStateLogin } from "./loginReducer";

export type MainReducer = {
  login: InitialStateLogin;
  hotels: InitialStateHotels;
};

const mainReducer = combineReducers({
  login: loginReducer,
  hotels: hotelsReducer,
});

export default mainReducer;
