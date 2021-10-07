import React from 'react';

import LoginForm from '../components/Auth/LoginForm';

const Login = React.memo(() => {
  const onSubmit = (name: string, password: string) => {
    console.log(password);
  }

  return <LoginForm onSubmit={onSubmit} />;
});

export default Login;
