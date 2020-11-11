import React, {ReactNode} from 'react'
import './index.css'
import {NavLink} from "react-router-dom";
import Button from "../../../components/UI/Button/Button";

const titles: Array<string> = ['№', 'Название', 'Автор', 'Год', 'Жанр', '']

function renderThead(name: string, index: number): ReactNode {
    return (
            <th key={name + index.toString()}> {name} </th>
    )
}
function renderTbody(params: dataSource, index: number): ReactNode {
    return (
        <tr key={params.number_book}>
            <th>{params.number_book}</th>
            <th>{params.name_book}</th>
            <th>{params.author}</th>
            <th>{params.year}</th>
            <th>{params.genre}</th>
            <th>
                <Button type={'submit'} styleType={'extra shadow'} disabled={false} onClick={()=>{}}>
                    <NavLink to={`/issue/${params.uid}`} >
                        Выдать
                    </NavLink>
                </Button>
            </th>
        </tr>
    )
}

interface dataSource {
    id: number
    uid: string
    number_book: number
    name_book: string
    author: string
    year: number
    genre: string
}

type PropsTypes = {
    dataSource: Array<dataSource>
}

const Table = (props: PropsTypes) => {
    return (
        <table className={'Table'}>
            <thead>
                <tr>
                    {titles.map((title, index) => renderThead(title, index))}
                </tr>
            </thead>

            <tbody>
                    { props.dataSource.map((params, index) => renderTbody(params, index))}
            </tbody>
        </table>
    )
}

export default Table