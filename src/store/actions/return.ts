import {ThunkAction} from 'redux-thunk'
import {Action} from 'redux'
import axios from 'axios'
import {RETURN_BOOK_SUCCESS} from "../const/return";

export const returnBook = (codeBook: number): ThunkAction<void, unknown, unknown, Action<string>> => async dispatch => {
    await axios.get(`https://apilibmospolytech.ru/booksExample/return?book_example_id=${codeBook}`)
        .then(response => {
            dispatch(returnBookSuccess())
        }).catch(error => {
            dispatch(returnBookError(error))
        })
}

export function returnBookSuccess() {
    return {
        type: RETURN_BOOK_SUCCESS
    }
}

export function returnBookError(error: any) {
    const errorCode: string = error.message.slice(error.message.length - 3)
    let errorMessage

    if (errorCode === '404') {
        errorMessage = 'Данная книга отсутствует в базе.'
    } else if (errorCode === '500') {
        errorMessage = 'Ошибка сервера. Повторите попытку позже.'
    }

    return {
        type: 'RETURN_BOOK_ERROR',
        payload: errorMessage
    }
}