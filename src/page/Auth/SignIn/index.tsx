import React from 'react'
import './index.css'
import Input from '../../../components/UI/Input'
import Button from "../../../components/UI/Button/Button";

const SignIn = () => {
    return(
        <div className='Auth'>
            <div>
                <h1>Электронная библиотека</h1>
                <form>
                    <Input type={'email'} label={'Логин'} value={''}/>
                    <Input type={'password'} label={'Пароль'} value={''}/>
                    <Button type={'primary'} disabled={false} onClick={()=>{}}>
                        Войти
                    </Button>
                </form>

            </div>
        </div>
    )
}

export default SignIn