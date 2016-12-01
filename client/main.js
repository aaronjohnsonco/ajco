import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Resume from './components/Resume';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="resume" component={Resume} />
    </Route>
  </Router>
)

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('render-target'));
});
