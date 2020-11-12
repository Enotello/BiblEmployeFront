import {SIGN_UP_SUCCESS, SIGN_IN_ERROR, SIGN_IN_SUCCESS, SIGN_UP_ERROR} from '../../const/auth'

const defaultState = {
    errorMessage: null,
    showSuccessMessage: false,
    token: null,
    errorCode: null,
}

type ActionType = {
    type: string
    payload: any
}

export default function signUpReducer(state = defaultState, action: ActionType) {
    switch (action.type) {
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                showSuccessMessage: true,
                errorMessage: null,
                errorCode: null
            }
        case SIGN_UP_ERROR:
            return {
                ...state,
                errorMessage: action.payload.errorMessage,
                showSuccessMessage: false,
                errorCode: action.payload.errorCode
            }
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                errorMessage: null,
                errorCode: null
            }
        case SIGN_IN_ERROR:
            return {
                ...state,
                showSuccessMessage: false,
                errorMessage: action.payload.errorMessage,
                errorCode: action.payload.errorCode,
            }
        default:
            return state
    }
}