import React from "react";
import './index.css'
import {Layout, Breadcrumb, Button} from 'antd';
import ListBook from "../../page/ListBook";
import {Switch, Route, BrowserRouter, NavLink} from "react-router-dom";
import { Provider } from 'react-redux';
import IssueBook from "../../page/IssueBook";
import Register from "../../page/Auth/SignUp";
import Login from "../../page/Auth/SignIn";
import AddBook from "../../page/AddBook"
import {store} from "../../store/store";
const { Header, Content, Footer } = Layout;


const App: React.FC = () => {
    return(
        <Provider store={store}>
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
                            <div className='icon'>
                                <NavLink to={'/sign_in'}>
                                    <i className="fas fa-door-open"/>
                                    <p>Выход</p>
                                </NavLink>
                            </div>
                    </Header>
                    <Content style={{ padding: '50px' }}>
                        <div className="site-layout-content">
                            <Switch>
                                <Route path="/issue/:uid" component={IssueBook} />
                                <Route path="/sign_up" component={Register} />
                                <Route path="/sign_in" component={Login} />
                                <Route path={"/add_book"} component={AddBook}/>
                                <Route path="/" component={ListBook}/>
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        <footer>
                            <Button type="primary" >
                                <NavLink to={'/sign_up'} exact={true}>
                                    Регистрация
                                </NavLink>
                            </Button>
                            <Button type="primary" >
                                <NavLink to={'/add_book'} exact={true}>
                                    Добавить книгу
                                </NavLink>
                            </Button>
                        </footer>
                    </Footer>
                </Layout>
            </BrowserRouter>
        </Provider>)

}

export default App
