import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

interface IProps {
  onSubmit: (name: string, password: string) => void;
}

const useLoginFormStyles = makeStyles(() => createStyles({
  root: {
    display: 'flex',
    height: '95vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '500px',
  },
  input: {
    margin: '15px 0',
  },
}));

const LoginForm: React.FC<IProps> = React.memo(({ onSubmit }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const classes = useLoginFormStyles();

  const handleFormSubmit = () => onSubmit(name, password);

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleFormSubmit}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <TextField
              label="Username"
              id="username"
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className={classes.input}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className={classes.input}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              type="button"
              color="primary"
            >
              Log in
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
});

export default LoginForm;
