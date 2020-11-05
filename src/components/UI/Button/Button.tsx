import React, {ReactNode} from 'react'
import './Button.css'

type PropsTypes = {
    type: string
    children: ReactNode
    disabled: boolean
    onClick: () => void
}

const Button = (props: PropsTypes) => {
    const classes = ['Button', `${props.type}`]

    return (
        <button
            className={classes.join(' ')}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button