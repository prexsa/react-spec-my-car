import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import Specs from './components/Specs';
import Parts from './components/Parts';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/specs' component={Specs} />
      <Route path='/parts' component={Parts} />
    </Route>
  </Router>
  , document.querySelector('.container'));