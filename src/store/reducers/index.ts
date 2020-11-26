import { combineReducers } from "redux";
// import { bookReducer } from "./book";
import authReducer from "./auth";


export default combineReducers({
    // book: bookReducer,
    auth: authReducer
});
