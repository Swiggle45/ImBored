import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, hashHistory, withRouter } from 'react-router';

import Landing from './landing.jsx';
import MyComponent from './results.jsx';

var contentNode = document.getElementById("contents");

const NoMatch = () => <p>Page Not Found</p>;

const RoutedApp = () => (
  <Router history={hashHistory} >
    <Redirect from="/" to="/places" />
    <Route path="/places" component={withRouter(Landing)} />
    <Route path="/results" component={withRouter(MyComponent)} />
    <Route path="*" component={NoMatch} />
  </Router>);

ReactDOM.render(<RoutedApp />, contentNode);