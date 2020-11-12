import React from "react";
import 'antd/dist/antd.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from "../../store/store";
import IssueBook from "../../page/IssueBook";
import SignIn from "../../page/Auth/SignIn";
import ListBook from "../../page/ListBook";
import Layout from '../Layout';
import SignUp from "../../page/Auth/SignUp";




const App = () => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/issue/:uid" component={IssueBook} />
                        <Route path="/sign_up" component={SignUp}/>
                        <Route path="/sign_in" component={SignIn}/>
                        <Route path="/" component={ListBook}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        </Provider>)

}

export default App
// not login
// <Switch>
// <Route path="/sign_in" component={SignIn}/>
// </Switch>