import { SHOW_ERROR } from "../actions";

const initialState = "";

function errorMessage(state = initialState, action) {
  switch (action.type) {
    case SHOW_ERROR:
      return action.errorMessage;
    default:
      return state;
  }
}

export default errorMessage;
