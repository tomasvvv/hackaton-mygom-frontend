import React from 'react';

import { TRouteType } from './containers/Routes/RouteManager';

const CompanyHome = React.lazy(() => import(/* webpackChunkName: "CompanyHomePage" */ './pages/CompanyHome'));
const Login = React.lazy(() => import(/* webpackChunkName: "LoginPage" */ './pages/Login'));
const Users = React.lazy(() => import(/* webpackChunkName: "UsersPage" */ './pages/Users'));
const NotFound = React.lazy(
  () => import(/* webpackChunkName: "NotFound" */ './containers/Error/NotFound'),
);

export const routes = {
  companyHome: '/',
  login: '/login',
  users: '/users',
};

export const Routes: TRouteType = {
  companyHome: {
    path: routes.companyHome,
    exact: true,
    component: CompanyHome,
    authorized: true,
  },
  users: {
    path: routes.users,
    exact: true,
    authorized: true,
    component: Users,
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
