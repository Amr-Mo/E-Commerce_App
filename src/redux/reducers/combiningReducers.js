// importing reducers
import itemReducer from "./itemReducer";

// redux attributes
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  addItems: itemReducer,
});

export default rootReducer;
