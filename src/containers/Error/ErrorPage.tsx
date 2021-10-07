import React from 'react';
import { Grid } from '@material-ui/core';

interface IErrorPageProps {
  message: string;
}

const ErrorPage: React.FC<IErrorPageProps> = ({ message }): JSX.Element => (
  <Grid container>
    <Grid>
      <p>{message}</p>
    </Grid>
  </Grid>
);

export default ErrorPage;
