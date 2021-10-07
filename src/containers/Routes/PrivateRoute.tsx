import React, { ReactNode, Suspense } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { routes } from '../../Routes';
import { StorageService } from '../../services/StorageService';

interface IPrivateRouteProps extends RouteProps {
  component: React.ComponentClass | React.FC;
  fallback: NonNullable<ReactNode> | null;
}

const PrivateRoute: React.FC<IPrivateRouteProps & RouteComponentProps> = (
  props,
  ...rest
) => {
  // Authorization logic
  const authorized = !StorageService.getAccessToken();
  const { fallback, component, path } = props;

  if (!authorized) {
    return <Redirect to={routes.login} />;
  }

  return (
    <Suspense fallback={fallback}>
      <Route component={component} exact path={path} {...rest} />
    </Suspense>
  );
};
export default withRouter(PrivateRoute);
