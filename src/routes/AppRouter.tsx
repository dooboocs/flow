import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login, Profile, Schedule } from 'src/pages/index.';
import NotFoundPage from 'src/pages/NotFoundPage';
import PrivateRoute from './PrivateRoute';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Schedule} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
