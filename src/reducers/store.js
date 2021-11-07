import { createStore, combineReducers } from "redux";
import tweetsReducer from "./Tweets/reducer";
import themeReducer from "./theme/reducer";
import likesReducer from "./likes/reducer";
import usersReducer from "./Users/reducer";
const reducer = combineReducers({
  tweetsReducer,
  themeReducer,
  likesReducer,
  usersReducer,
});
const store = createStore(reducer);
export default store;
