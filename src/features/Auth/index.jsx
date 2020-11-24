import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function AuthFeatures(props) {

    //lấy match thằng thằng route
    const match = useRouteMatch();

    return (
        <Switch>
            <Route path={`${match.url}/login`} exact component={LoginPage}/>
            <Route path={`${match.url}/register`} exact component={RegisterPage}/>
        </Switch>
    );
}

export default AuthFeatures;