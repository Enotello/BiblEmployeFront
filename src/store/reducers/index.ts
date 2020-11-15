import { combineReducers } from "redux";
import { bookReducer } from "./book";
import signUpReducer from "./auth";


export default combineReducers({
    book: bookReducer,
    signUp: signUpReducer
});
