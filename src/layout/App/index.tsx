import React from "react";
import { Layout, Breadcrumb } from 'antd';
import ListBook from "../../page/ListBook";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import IssueBook from "../../page/IssueBook";
import {store} from "../../store/store";
const { Header, Content, Footer } = Layout;

const App = () => {


    return(
        <Provider store={store}>
            <BrowserRouter>
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <div>
                        <span style={{color:"white", fontFamily: "Rubik", fontSize: 22}}>
                            Библиотека МосПолитеха
                        </span>
                        </div>
                    </Header>
                    <Content style={{ padding: '50px' }}>
                        <div className="site-layout-content">

                            <Switch>
                                <Route path="/issue/:uid" component={IssueBook} />
                                <Route path="/" component={ListBook}/>
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </BrowserRouter>
        </Provider>)

}

export default App
