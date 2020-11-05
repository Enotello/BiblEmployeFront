import React, {useEffect, useState} from "react";
import './index.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/index'
import {Form,} from "antd";
import Axios from "axios";


type PropsType = {
    match: any
}
const IssueBook = ({match}: PropsType) => {
    console.log(match)

    const [form] = Form.useForm();
    const [dataBook, setDataBook]: any = useState([])

    useEffect(() => {
        Axios.get(`http://185.17.122.164:3009/book/${match.params.uid}`)
            .then((response) => {
                setDataBook(response.data[0])
            })
    }, [match.params.uid])

    return(
            <div className='IssueBook'>

                <div className='card'>
                    <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt={"example"}/>
                    <p>
                        Europe Street beat <br/> <span>www.instagram.com</span>
                    </p>
                </div>

                <div className='info'>
                            <p>
                                Название книги: {dataBook.name_book}
                            </p>
                            <p>
                                Автор: {dataBook.author}
                            </p>
                            <p>
                                Год: {dataBook.year}
                            </p>
                            <p>
                                Жанр:  {dataBook.genre}
                            </p>
                </div>

                <div className='form'>
                            <Form
                                form={form}
                                initialValues={{ layout: 'vertical' }}
                                layout={'vertical'}
                            >
                                <Input type={'name'} label={"ID Студента"} value={''}/>
                                <Input type={'name'} label={"Фамилия"} value={''}></Input>
                                <Input type={'name'} label={"Имя"} value={''}></Input>
                                <Form.Item >
                                    <Button type={'primary'} disabled={false} onClick={()=>{}}>Выдать</Button>
                                </Form.Item>
                            </Form>
                </div>
            </div>
    )
}

export default IssueBook
