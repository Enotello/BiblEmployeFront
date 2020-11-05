import React, {useEffect, useState} from "react";
import Table from './Table/index'
import Axios from "axios";
import {Button, Input} from 'antd';
import "./index.css"
import {NavLink} from "react-router-dom";
import {getBooks} from "../../api/books";
const { Search } = Input;

const columns = [
    {
        title: 'Номер книги',
        dataIndex: 'number_book',
    },
    {
        title: 'Название',
        dataIndex: 'name_book',
    },
    {
        title: 'Автор',
        dataIndex: 'author',
    },
    {
        title: 'Год',
        dataIndex: 'year',
    },
    {
        title: 'Жанр',
        dataIndex: 'genre',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text:string, record:any) => {
            return (

                <Button type="primary" >
                    <NavLink to={`/issue/${record.uid}`}>
                        Выдать
                    </NavLink>
                </Button>
            )
        },
    },
];

const ListBook = () => {

    const [dataBooks, setDataBooks]: any = useState([])
    const [filter, setFilter]:any = useState("")

    useEffect(() => {
        getBooks().then((response) => {
                setDataBooks(response.data)
            })

    }, [])

    const onSearch = (searchValue: string) =>{
        setFilter(searchValue)
    }

    return(
        <div className='ListBook'>
            <div className="input-search-wrapper">
                <Search
                    placeholder="input search text"
                    onChange={(event) => onSearch(event.target.value)}
                />
            </div>
            <Table dataSource={dataBooks.filter((item:any) => item.name_book.includes(filter))} />
        </div>
    )
}

export default ListBook
