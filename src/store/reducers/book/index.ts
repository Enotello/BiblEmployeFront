import {RETURN_BOOK_ERROR, RETURN_BOOK_SUCCESS} from "../../const/return";

const defaultState = {
    errorMessage: ''
}

type ActionType = {
    type: string
    payload: any
}

export default function bookReducer(state = defaultState, action: ActionType) {
    switch (action.type) {
        case RETURN_BOOK_SUCCESS:
            return {...state, errorMessage: ''}
        case RETURN_BOOK_ERROR:
            return {...state, errorMessage: action.payload}
        default:
            return state
    }
}