import React, {useEffect, useState} from "react";
import {Table, Button, Input} from 'antd';
import "./index.css"
import {NavLink} from "react-router-dom";
import {getBooks} from "../../api/books";
const { Search } = Input;

const columns = [
    {
        title: 'Номер книги',
        dataIndex: 'book_id',
    },
    {
        title: 'Название',
        dataIndex: 'title',
    },
    {
        title: 'Автор',
        dataIndex: 'author',
    },
    {
        title: 'Год',
        dataIndex: 'physical_carier',
    },
    {
        title: 'Жанр',
        dataIndex: 'part_name',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text:string, record:any) => {


            return (

                <Button type="primary" >
                    <NavLink to={`/issue/${record.book_id}`}>
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
        console.log("ge")
        getBooks().then((response) => {
            console.log("ge")
                setDataBooks(response.data)
                console.log(response.data)
            })

    }, [])

    const onSearch = (searchValue: string) =>{
        setFilter(searchValue)
    }


    return(

        <div>
            <div className="input-search-wrapper">
                <Search
                    placeholder="input search text"
                    onChange={(event) => onSearch(event.target.value)}
                     />
            </div>
            <Table columns={columns} dataSource={dataBooks.filter((item:any) => item.title.includes(filter))} />
        </div>
    )
}

export default ListBook
