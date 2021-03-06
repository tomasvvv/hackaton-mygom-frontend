import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import * as Sentry from '@sentry/react';

import ErrorPage from './containers/Error/ErrorPage';
import AppRoutes from './containers/Routes/AppRoutes';
import ErrorBoundary from './ErrorBoundary';

import './assets/styles/css/App.css';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Sentry.ErrorBoundary fallback={<ErrorPage message={t('internal.server.error')} />}>
      <ErrorBoundary>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ErrorBoundary>
    </Sentry.ErrorBoundary>
  );
};

export default App;
