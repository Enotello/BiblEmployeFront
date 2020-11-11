import React from 'react'
import './index.css'
import { Formik } from 'formik'
import * as yup from 'yup'
import Input from '../../../components/UI/Input'
import Button from "../../../components/UI/Button/Button";

const SignUp = () => {
    const validationSchema = yup.object().shape({
        login: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        password: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательное поле'),
    })

    return(
        <div className='SignUp'>
            <Formik initialValues={{
                login: '',
                password: '',
                confirmPassword: '',
            }}
                    validateOnBlur
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
            >
                {
                    ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                        <div>
                            <h1>Регистрация</h1>
                            <form>
                                <Input type={'login'} name={'login'} label={'Логин'} value={values.login} onChange={handleChange} onBlur={handleBlur}
                                       touched={touched.login} errors={errors.login}
                                />

                                <Input type={'password'} name={'password'} label={'Придумайте пароль'} value={values.password} onChange={handleChange} onBlur={handleBlur}
                                       touched={touched.password} errors={errors.password}
                                />

                                <Input type={'password'} name={'confirmPassword'} label={'Подтвердите пароль'} value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur}
                                       touched={touched.confirmPassword} errors={errors.confirmPassword}
                                />

                                <Button styleType={'primary'}
                                        type={'submit'}
                                        // disabled={!isValid && !dirty}
                                        onClick={handleSubmit}
                                >
                                    Зарегистрироваться
                                </Button>
                            </form>

                        </div>
                    )
                }
            </Formik>
        </div>
    )
}

export default SignUp