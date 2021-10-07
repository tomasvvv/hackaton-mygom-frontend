import React from 'react';

import { TRouteType } from './containers/Routes/RouteManager';

const Home = React.lazy(() => import(/* webpackChunkName: "HomePage" */ './pages/Home'));
const NotFound = React.lazy(
  () => import(/* webpackChunkName: "NotFound" */ './containers/Error/NotFound'),
);

export const routes = {
  home: '/',
};

export const Routes: TRouteType = {
  home: {
    path: routes.home,
    exact: true,
    component: Home,
  },
  notFound: {
    path: '*',
    exact: false,
    component: NotFound,
  },
};
