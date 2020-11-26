import { combineReducers } from "redux";
import authReducer from "./auth";
import bookReducer from "./book";


export const rootReducer = combineReducers({
    auth: authReducer,
    book: bookReducer
});


export type RootState = ReturnType<typeof rootReducer>