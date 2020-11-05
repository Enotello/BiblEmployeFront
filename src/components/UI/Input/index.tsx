import React from 'react'
import './index.css'

type PropsType = {
    type: string
    label: string
    value: string
    // onChange:
}

const Input = (props: PropsType) => {
    const inputType: string = props.type || 'text'
    const cls: Array<string> = ['Input']
    const htmlFor: string = `${inputType}-${Math.random()}`

    return (
        <div className={cls.join()}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                // onChange={props.onChange}
            />

            {/*{*/}
            {/*    isInvalid(match)*/}
            {/*        ? <span>{match.errorMessage || 'Введите верное значение'}</span>*/}
            {/*        : null*/}
            {/*}*/}
        </div>
    )
}

export default Input