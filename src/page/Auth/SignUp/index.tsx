import React from 'react'
import './index.css'
import Input from '../../../components/UI/Input'
import {NavLink} from 'react-router-dom'
import Button from "../../../components/UI/Button/Button";

const SignUp = () => {
    return(
        <div className='SignUp'>
            <div>
                <h1>Электронная библиотека</h1>
                <form>
                    <Input type={'email'} label={'Логин'} value={''}/>
                    <Input type={'password'} label={'Пароль'} value={''}/>
                    <Input type={'password'} label={'Пароль'} value={''}/>
                    <Button type={'primary'} disabled={false} onClick={()=>{}}>
                        Зарегистрироваться
                    </Button>
                </form>

            </div>
        </div>
    )
}

export default SignUp