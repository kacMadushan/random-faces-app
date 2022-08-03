import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { HOME, PROFILE, NOMATCH } from '../constants';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={HOME} component={HomePage} />
        <Route path={PROFILE} component={ProfilePage} />
        <Route path={NOMATCH} component={NotFound} />
      </Switch>
    </Router>
  )
};

export default AppRouter;
