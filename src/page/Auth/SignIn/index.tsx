import React from 'react'
import './index.css'
import { Formik } from 'formik'
import * as yup from 'yup'
import Input from '../../../components/UI/Input'
import Button from "../../../components/UI/Button/Button";


const SignIn = () => {
    const validationSchema = yup.object().shape({
        login: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        password: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    })

    return(
        <div className='Auth'>
            <Formik initialValues={{
                login: '',
                password: '',
            }}
                    validateOnBlur
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
            >
                {
                    ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                        <div>
                            <h1>Авторизация</h1>
                            <form>
                                <Input type={'login'} name={'login'} label={'Логин'} value={values.login} onChange={handleChange} onBlur={handleBlur}
                                       touched={touched.login} errors={errors.login}
                                />

                                <Input type={'password'} name={'password'} label={'Пароль'} value={values.password} onChange={handleChange} onBlur={handleBlur}
                                       touched={touched.password} errors={errors.password}
                                />



                                <Button styleType={'primary'}
                                        type={'submit'}
                                        // disabled={!isValid && !dirty}
                                        onClick={handleSubmit}
                                >
                                    Войти
                                </Button>
                            </form>

                        </div>
                    )
                }
            </Formik>
        </div>
    )
}

export default SignIn