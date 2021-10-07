import React from 'react';

import { TRouteType } from './containers/Routes/RouteManager';

const Home = React.lazy(() => import(/* webpackChunkName: "HomePage" */ './pages/Home'));
const Login = React.lazy(() => import(/* webpackChunkName: "LoginPage" */ './pages/Login'));
const NotFound = React.lazy(
  () => import(/* webpackChunkName: "NotFound" */ './containers/Error/NotFound'),
);

export const routes = {
  home: '/',
  login: '/login',
};

export const Routes: TRouteType = {
  home: {
    path: routes.home,
    exact: true,
    authorized: true,
    component: Home,
  },
  login: {
    path: routes.login,
    exact: true,
    component: Login,
  },
  notFound: {
    path: '*',
    exact: false,
    component: NotFound,
  },
};
