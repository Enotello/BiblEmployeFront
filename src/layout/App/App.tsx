import React, {useCallback} from "react";
import './App.css'
import "antd/dist/antd.css";
import {Layout, Breadcrumb, Button, Space, Modal} from 'antd';
import ListBook from "../../page/ListBook";
import {Switch, Route, BrowserRouter, NavLink} from "react-router-dom";
import IssueBook from "../../page/IssueBook";
import Register from "../../page/Auth/Register/Register";
import Login from "../../page/Auth/Login/Login";

const {Header, Content, Footer} = Layout;


const App = () => {

    return (

        <BrowserRouter>
            <Layout className="layout">
                <Header className="header">
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
                    <div className='exit'>
                        <Button type='link' onClick={() => {
                        }}>Выход</Button>
                    </div>
                </Header>
                <Content style={{padding: '50px', paddingBottom: '10px'}}>
                    <div className="site-layout-content">
                        <Switch>
                            <Route path="/issue/:uid" component={IssueBook}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/" component={ListBook}/>
                        </Switch>
                    </div>

                </Content>
            </Layout>
        </BrowserRouter>)

}

export default App