import React, {useEffect, useState} from "react";
import {Button, Card, Col, Form, Input, Row} from "antd";
import Axios from "axios";

const { Meta } = Card;

const xs = { span: 12, offset: 1 }
const lg = { span: 6, offset: 2 }

type PropsType = {
    match: any
}

const IssueBook = ({match}: PropsType) => {

    const [form] = Form.useForm();

    const [dataBook, setDataBook]: any = useState([])

    useEffect(() => {
        Axios.get(`http://185.17.122.164:3009/book/${match.params.uid}`)
            .then((response) => {
                setDataBook(response.data[0])
            })
    }, [match.params.uid])

    return(


            <Row >
                <Col xs={xs} lg={lg}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://www.mann-ivanov-ferber.ru/assets/images/covers/61/25761/1.00x-thumb.png" />}
                    >
                        <Meta title={dataBook.name_book} description={dataBook.author} />
                    </Card>
                </Col>
                <Col xs={xs} lg={lg}>
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
                </Col>
                <Col xs={xs} lg={lg}>
                    <Form
                        form={form}
                        initialValues={{ layout: 'vertical' }}
                        layout={'vertical'}
                    >
                        <Form.Item label="ID Студента">
                            <Input placeholder="ID Студента" />
                        </Form.Item>
                        <Form.Item label="Фамилия">
                            <Input placeholder="Фамилия" />
                        </Form.Item>
                        <Form.Item label="Имя">
                            <Input placeholder="Имя" />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit">Выдать</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

    )
}

export default IssueBook
