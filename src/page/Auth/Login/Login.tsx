import React, {useCallback} from 'react'
import './Login.css'
import {Formik} from 'formik'
import * as yup from 'yup'
import InputValidate from "../../../components/UI/Input/Input";
import Button from '../../../components/UI/Button/Button'
import {signIn} from '../../../store/actions/auth'
import {connect, useDispatch} from 'react-redux'

type PropsType = {
    errorMessage: string
    token: string
    errorCode: string
}


const Login = (props: PropsType) => {
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
                                <InputValidate type={'email'} name={'email'} label="Email" value={values.email}
                                               onChange={handleChange} onBlur={handleBlur}
                                               touched={touched.email} errors={errors.email} dirty={dirty}
                                />
                                <InputValidate type={'password'} name={'password'} label="Пароль"
                                               value={values.password}
                                               onChange={handleChange} onBlur={handleBlur}
                                               touched={touched.password} errors={errors.password} dirty={dirty}
                                />
                                <Button styleType={'primary'}
                                        type={'submit'}
                                        onClick={handleSubmit}
                                >
                                    Вход
                                </Button>
                                {(props.errorMessage !== null) ? (<p className='error'>{props.errorMessage}</p>) : null}
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
        errorMessage: state.auth.errorMessage,
        showSuccessMessage: state.auth.showSuccessMessage
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
