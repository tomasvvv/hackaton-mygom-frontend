import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LoginForm from '../components/Auth/LoginForm';
import { routes } from '../Routes';
import { authenticate } from '../store/auth/actions';

const Login = React.memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async (name: string, password: string) => {
    await dispatch(authenticate({ name, password }));
    history.push(routes.companyHome);
  };

  return <LoginForm onSubmit={onSubmit} />;
});

export default Login;
