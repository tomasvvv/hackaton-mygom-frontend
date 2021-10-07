import React from 'react';
import { makeStyles } from '@material-ui/core';

interface IProps {
  children: React.ReactNode;
}

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    maxWidth: '50rem',
  },
}));

const Container: React.FC<IProps> = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};

export default Container;
