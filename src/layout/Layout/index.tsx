import React, {ReactNode} from "react";
import './index.css'
import {NavLink} from "react-router-dom";
import Button from "../../components/UI/Button/Button";

type PropsTypes = {
    children: ReactNode
}

const Layout = (props: PropsTypes) => {
    return (
        <div className='Layout'>
            <header>
                <div className='logo'>
                    Электронная библиотека
                </div>
                <nav className='links'>
                    <ul>
                        <li><NavLink to={'#'} style={{color: 'white'}} className='link'>Ссылка 1</NavLink></li>
                        <li><NavLink to={'#'} style={{color: 'white'}} className='link'>Ссылка 2</NavLink></li>
                        <li><NavLink to={'#'} style={{color: 'white'}} className='link'>Ссылка 3</NavLink></li>
                    </ul>
                </nav>
                <div className='icon'>
                    <NavLink to={'/sign_in'}>
                        <i className="fas fa-door-open"/>
                        <p>Выход</p>
                    </NavLink>
                </div>

            </header>

            <main> {props.children} </main>

            <footer>
                <Button type={'extra'} disabled={false} onClick={()=>{}}>
                    <NavLink to={'/sign_up'} exact={true}>
                        Регистрация
                    </NavLink>
                </Button>
            </footer>
        </div>
    )
}

export default Layout