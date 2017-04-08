import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {IndexApp} from '../app/IndexApp';


export const renderRoutes = () => (
    <Router history={browserHistory}>

        <Route path="/" component={IndexApp}>

        </Route>
    </Router>
);
/*

 */