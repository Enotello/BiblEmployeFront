import React from 'react'
import './index.css'

type PropsType = {
    name: string
    type: string
    label: string
    value: string
    onChange?: any
    onBlur?: any
    touched?: boolean
    dirty?: boolean
    errors?: string
}

const Input = (props: PropsType) => {
    const inputType: string = props.type || 'text'
    const cls: Array<string> = ['Input']
    const htmlFor: string = `${inputType}-${Math.random()}`

    return (
        <div className={cls.join()}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                name={props.name}
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
            {
                ((props.touched && props.errors) || props.dirty) && <p className={'error'}>{props.errors}</p>
            }
        </div>
    )
}

export default Input