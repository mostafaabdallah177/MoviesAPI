import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./Actions/CombinReud/CompineReducres";
import thunk from "redux-thunk";
const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
