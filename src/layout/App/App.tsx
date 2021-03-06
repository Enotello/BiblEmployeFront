import React, {useCallback} from "react";
import './App.css'
import "antd/dist/antd.css";
import {Layout, Breadcrumb, Button, Space, Modal} from 'antd';
import ListBook from "../../page/ListBook";
import {Switch, Route, BrowserRouter, NavLink, Redirect} from "react-router-dom";
import IssueBook from "../../page/IssueBook";
import Register from "../../page/Auth/Register/Register";
import Login from "../../page/Auth/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers";
import {logout} from "../../store/actions/auth";
import scanCode from "../../page/ListBook/index"

const {Header, Content, Footer} = Layout;


const App = () => {
  const authState: any = useSelector<RootState>((store) => store.auth);
  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header className="header">
          <div className='logo'>
            Электронная библиотека
          </div>
          {(authState.token)
            ? <>
              <nav className='links'>
                <ul>
                  <li className={"link-li"}><NavLink to={'#'} style={{color: 'white'}} className='link'>Добавить книгу</NavLink></li>
                  <li className={"link-li"}><NavLink to={'#'} style={{color: 'white'}} className='link'>Сканировать</NavLink></li>
                  <li className={"link-li"}><NavLink to={'#'} style={{color: 'white'}} className='link'>Добавить работника</NavLink></li>
                </ul>
              </nav>
              <div className='exit'>
                <Button type='text' onClick={() => stableDispatch(logout())}>Выход</Button>
              </div>
            </>
            : null
          }
        </Header>
        <Content style={{padding: '50px 10% 10px 10%'}}>
          <div className="site-layout-content">
            <Switch>
              {(authState.token)
                ? <>
                  <Route path="/issue/:uid" component={IssueBook}/>
                  <Route path="/register" component={Register}/>
                  <Route path="/" component={ListBook}/>
                </>

                : <>
                  <Redirect to={'/login'}/>
                  <Route path="/login" component={Login}/>
                </>}

            </Switch>
          </div>

        </Content>
        {/*
        <Footer className={"footer"}>
          <section className={"footer-content"}>
            <div className={"footer-logo"}>
              <img src="/public/footer-logo.jpg" alt="Библиотека Московского Политеха"/>
            </div>
            {(authState.token)
                ? <>
                  <nav className='links'>
                    <ul>
                      <li className={"link-li"}><NavLink to={'#'} style={{color: 'white'}} className='link'>Добавить книгу</NavLink></li>
                      <li className={"link-li"}><NavLink to={'#'} style={{color: 'white'}} className='link'>Сканировать</NavLink></li>
                      <li className={"link-li"}><NavLink to={'#'} style={{color: 'white'}} className='link'>Добавить работника</NavLink></li>
                    </ul>
                  </nav>
                </>
                : null
            }
          </section>
        </Footer>
        */}
      </Layout>
    </BrowserRouter>)

}

export default App
