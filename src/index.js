import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

require("./less/main.less");

import Nav from './components/nav';
import List from './components/list';
import Check from './components/check';
import Add from './components/add';

import {store} from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={Nav}>
                <IndexRoute component={List}/>
                <Route path='list' component={List}/>
                <Route path='check' component={Check}/>
                <Route path='add' component={Add}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
