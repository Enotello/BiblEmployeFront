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
                  <li><NavLink to={'#'} style={{color: 'white'}} className='link'>Ссылка 1</NavLink></li>
                  <li><NavLink to={'#'} style={{color: 'white'}} className='link'>Ссылка 2</NavLink></li>
                  <li><NavLink to={'#'} style={{color: 'white'}} className='link'>Ссылка 3</NavLink></li>
                </ul>
              </nav>
              <div className='exit'>
                <Button type='text' onClick={() => stableDispatch(logout())}>Выход</Button>
              </div>
            </>
            : null
          }
        </Header>
        <Content style={{padding: '50px', paddingBottom: '10px'}}>
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
      </Layout>
    </BrowserRouter>)

}

export default App
