import React, {useCallback} from 'react'
import './index.css'
import {Formik} from 'formik'
import * as yup from 'yup'
import { Input} from 'antd';
import Button from '../../../components/UI/Button/Button'
import {signIn, signUp} from '../../../store/actions/auth'
import {connect, useDispatch} from 'react-redux'

type PropsType = {
    errorMessage: string
    token: string
    errorCode: string
}


const SignIn = (props: PropsType) => {
    const validationSchema = yup.object().shape({
        email: yup.string().typeError('Должно быть строкой').required('Обязательное поле').email('Введите корректный email'),
        password: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    })

    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    return (
        <div className='Auth'>
            <Formik initialValues={{
                email: '',
                password: '',
            }}
                    validateOnBlur
                    validationSchema={validationSchema}
                    onSubmit={async (values) => {
                        const signInData = {
                            email: values.email,
                            password: values.password,
                        }
                        stableDispatch(signIn(signInData))
                    }}
            >
                {
                    ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                        <div>
                            <h1>Авторизация</h1>
                            <form>
                                <Input type={'email'} name={'email'} placeholder="Email" value={values.email}
                                       onChange={handleChange} onBlur={handleBlur}
                                />
                                <Input type={'password'} name={'password'} placeholder="Пароль" value={values.password}
                                       onChange={handleChange} onBlur={handleBlur}
                                />
                                <Button styleType={'primary'}
                                        type={'submit'}
                                        onClick={handleSubmit}
                                >
                                    Войти
                                </Button>
                                { (props.errorMessage !== null) ? (<p className='error'>{props.errorMessage}</p>) : null }
                            </form>
                        </div>
                    )
                }
            </Formik>
        </div>
    )
}

function mapStateToProps(state: any) {
    return {
        errorMessage: state.signUp.errorMessage,
        showSuccessMessage: state.signUp.showSuccessMessage
    }
}

interface DataType {
    email: string
    password: string
}

function mapDispatchToProps(dispatch: any) {
    return {
        signIn: (values: DataType) => dispatch(signIn(values)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
