import React from 'react';

import { TRouteType } from './containers/Routes/RouteManager';

const CompanyHome = React.lazy(() => import(/* webpackChunkName: "CompanyHomePage" */ './pages/CompanyHome'));
const NotFound = React.lazy(
  () => import(/* webpackChunkName: "NotFound" */ './containers/Error/NotFound'),
);

export const routes = {
  companyHome: '/',
};

export const Routes: TRouteType = {
  companyHome: {
    path: routes.companyHome,
    exact: true,
    component: CompanyHome,
  },
  notFound: {
    path: '*',
    exact: false,
    component: NotFound,
  },
};
