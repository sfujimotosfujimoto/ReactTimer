import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import Main from './components/Main';
import Timer from './components/Timer';
import Countdown from './components/Countdown';


require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// app css
require('style!css!sass!app/styles/app.scss');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer}></Route>
      <Route path="countdown" component={Countdown}></Route>
    </Route>
  </Router>
  ,
  document.getElementById('app')
);
