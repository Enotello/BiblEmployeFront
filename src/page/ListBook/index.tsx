import React, {useCallback, useEffect, useState} from "react";
import {Table, Button, Input, Space, Modal} from 'antd';
import "./index.css"
import {NavLink} from "react-router-dom";
import {getBooks} from "../../api/books";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from '../../store/reducers/index'
import {returnBook} from "../../store/actions/return";

const {Search} = Input;


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
        render: (text: string, record: any) => {


            return (

                <Button type="primary">
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
    const [filter, setFilter]: any = useState("")

    const bookState: any = useSelector<RootState>((store) => store.book);
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);

    function errorModal(errorMessage: string) {
        Modal.error({
            // title: 'Ошибка',
            content: errorMessage,
        });
    }
    function successModal() {
        Modal.success({
            // title: '',
            content: 'Книга возвращена',
        });
    }

    let code = '';
    const scanCode = () => {
        document.addEventListener('keypress', event => {
            if (event.keyCode === 13) {
                if (code.length > 10) {
                    console.log(code)
                    // // @ts-ignore
                    stableDispatch(returnBook(Number(code)))
                    code = ''
                }
            } else {
                code += event.key;
            }
        })
        document.removeEventListener('keypress', event => {
            if (event.keyCode === 13) {
                if (code.length > 10) {
                    console.log(code)
                    // @ts-ignore
                    stableDispatch(returnBook(Number(code)))
                    code = ''
                }
            } else {
                code += event.key;
            }
        })
        if (!bookState.errorMessage) {
            errorModal(bookState.errorMessage)
        } else {
            successModal()
        }
    }


    useEffect(() => {
        console.log("ge")
        getBooks().then((response) => {
            console.log("ge")
            setDataBooks(response.data)
            console.log(response.data)
        })

    }, [])

    const onSearch = (searchValue: string) => {
        setFilter(searchValue)
    }

    return (
        <>
            <div>
                <div className="input-search-wrapper">
                    <Search
                        placeholder="input search text"
                        onChange={(event) => onSearch(event.target.value)}
                    />
                </div>
                <Table columns={columns} dataSource={dataBooks.filter((item: any) => item.title.includes(filter))}/>
            </div>
            <div style={{textAlign: 'center'}}>
                <Space size={"middle"}>
                    <Button type="primary">
                        <NavLink to={'/register'} exact={true}>
                            Регистрация
                        </NavLink>
                    </Button>

                    <Button type="primary" onClick={scanCode}>
                        Сканировать
                    </Button>
                </Space>
            </div>
        </>
    )
}

export default ListBook
