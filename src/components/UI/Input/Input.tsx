import React from 'react'
import {Input} from 'antd';
import './Input.css'

type PropsType = {
    name: string
    type: string
    label: string
    value: any
    placeHolder?: string
    onChange?: any
    onBlur?: any
    touched?: boolean
    dirty?: boolean
    errors?: string
    placeholder?: string
}

const InputValidate = (props: PropsType) => {
    const inputType: string = props.type || 'text'
    const cls: Array<string> = ['Input']
    const htmlFor: string = `${inputType}-${Math.random()}`

    return (
        <div className={cls.join()}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <Input
                name={props.name}
                type={inputType}
                id={htmlFor}
                value={props.value}
                placeholder={props.placeHolder}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
            {
                ((props.touched && props.errors) || props.dirty) && <p className={'error'}>{props.errors}</p>
            }
        </div>
    )
}

export default InputValidate