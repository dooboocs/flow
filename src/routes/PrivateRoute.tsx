import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  const isLogin = window.localStorage.getItem('user') ? true : false;

  return (
    <Route {...rest}>
      {isLogin ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
}
