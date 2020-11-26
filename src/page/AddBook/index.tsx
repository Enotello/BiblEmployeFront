import React, {useCallback} from "react";
import {Formik} from "formik";
import InputValidate from '../../components/UI/Input/Input'
import {array, boolean, date, number, string} from "yup";
import * as yup from "yup";
import Button from "../../components/UI/Button/Button";
import './index.css'
import {addBook} from "../../store/actions/add";
import {useDispatch} from "react-redux";

interface FormValues {
    isbn: number | undefined;
    edition: number | undefined;
    author: string | undefined;
    title: string | undefined;
    physicalMedium: string | undefined;
    partNumber: number | undefined;
    partTitle: string | undefined;
    publisher: string | undefined;
    dateOfIssue: number | undefined;
    size: number | undefined;
    illustrations: boolean | undefined;
    indexUDC: number | undefined;
    mainWords: string[] | undefined
}

const AddBook: React.FC = () => {
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    const initialValues: FormValues = {
        isbn: undefined,
        edition: undefined,
        author: undefined,
        title: undefined,
        physicalMedium: undefined,
        partNumber: undefined,
        partTitle: undefined,
        publisher: undefined,
        dateOfIssue: undefined,
        size: undefined,
        illustrations: undefined,
        indexUDC: undefined,
        mainWords: undefined
    }

    const validationSchema = yup.object().shape({
        isbn: yup.number().typeError('Должно быть в виде чисел').required('Обязательное поле'),
        edition: yup.number().typeError('Должно быть в виде чисел').required('Обязательное поле'),
        author: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        title: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        physicalMedium: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        partNumber: yup.number().typeError('Должно быть в виде чисел').required('Обязательное поле'),
        partTitle: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        publisher: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        dateOfIssue: yup.number().typeError('Должно быть в виде чисел').required('Обязательное поле'),
        size: yup.number().typeError('Должно быть в виде чисел').required('Обязательное поле'),
        illustrations: yup.boolean().required('Обязательное поле'),
        indexUDC: yup.number().typeError('Должно быть в виде чисел').required('Обязательное поле'),
        mainWords: yup.array().typeError('Должно быть строкой').required('Обязательное поле'),
    })

    return (
        <div className='add-book-container'>
            <h1>Добавление книги</h1>
            <Formik
                initialValues={ initialValues }
                validationSchema={ validationSchema }
                onSubmit={async (values) => {
                    const addBookData = {
                        isbn: values.isbn,
                        edition: values.edition,
                        author: values.author,
                        title: values.title,
                        physicalMedium: values.physicalMedium,
                        partNumber: values.partNumber,
                        partTitle: values.partTitle,
                        publisher: values.publisher,
                        dateOfIssue: values.dateOfIssue,
                        size: values.size,
                        illustrations: values.illustrations,
                        indexUDC: values.indexUDC,
                        mainWords: values.mainWords,
                    }
                    // @ts-ignore
                    stableDispatch(addBook(addBookData))
                    /*if (props.errorCode == '') {
                        values.email = ''
                        values.password = ''
                        values.confirmPassword = ''
                    }
                    */
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit} className='add-book-form' method="POST">
                        <InputValidate type={'text'} name={'isbn'} label={'Номер isbn'} value={values.isbn} placeHolder={"Введите номер isbn"}
                               onChange={handleChange}
                        />
                        {errors.isbn && touched.isbn && errors.isbn}
                        <InputValidate type={'text'} name={'edition'} label={'Тираж'} value={values.edition} placeHolder={"Введите тираж"}
                               onChange={handleChange}
                        />
                        <InputValidate type={'text'} name={'author'} label={'Автор'} value={values.author} placeHolder={"Введите имя автора"}
                               onChange={handleChange}
                        />
                        <InputValidate type={'text'} name={'title'} label={'Заглавие'} value={values.title} placeHolder={"Введите заглавие"}
                               onChange={handleChange}
                        />
                        <InputValidate type={'text'} name={'physicalMedium'} label={'Физический носитель'} value={values.physicalMedium} placeHolder={"Введите тип физического носителя"}
                               onChange={handleChange}
                        />
                        <InputValidate type={'text'} name={'partNumber'} label={'Номер части'} value={values.partNumber} placeHolder={"Введите номер части"}
                               onChange={handleChange}
                        />
                        <InputValidate type={'text'} name={'partTitle'} label={'Название части'} value={values.partTitle} placeHolder={"Введите название части"}
                               onChange={handleChange}
                        />
                        <InputValidate type={'text'} name={'publisher'} label={'Издательство'} value={values.publisher} placeHolder={"Введите наименование издательства"}
                               onChange={handleChange}
                        />
                        <InputValidate type={'text'} name={'dateOfIssue'} label={'Дата издания'} value={values.dateOfIssue} placeHolder={"Введите дату издания книги"}
                               onChange={handleChange}
                        />
                        <InputValidate type={'text'} name={'size'} label={'Объём'} value={values.size} placeHolder={"Введите объём (стр.)"}
                               onChange={handleChange}
                        />
                        <InputValidate type={'text'} name={'illustrations'} label={'Наличие иллюстраций'} value={values.illustrations} placeHolder={"Имеются ли иллюстрации?"}
                               onChange={handleChange}
                        />
                        <InputValidate type={'text'} name={'indexUDC'} label={'Индекс УДК'} value={values.indexUDC} placeHolder={"Введите индекс УДК"}
                               onChange={handleChange}
                        />
                        <InputValidate type={'text'} name={'mainWords'} label={'Ключевые слова'} value={values.mainWords} placeHolder={"Введите через запятую ключевые слова"}
                               onChange={handleChange}
                        />
                        <Button styleType={'add-book-form-btn'}
                                type={'submit'}
                                onClick={handleSubmit}
                        >
                            Добавить книгу
                        </Button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default AddBook