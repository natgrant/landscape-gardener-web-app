import { combineReducers } from "redux";

import errorMessage from "./errorMessage";
import serviceReducer from "./serviceReducer";

export default combineReducers({
  errorMessage,
  services: serviceReducer
});
