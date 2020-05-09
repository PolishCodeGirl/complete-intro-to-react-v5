import { combineReducers } from "redux";
import { locationReducer } from "./location";
import { themeReducer } from "./theme";

export default combineReducers({
    location: locationReducer,
    theme: themeReducer
});