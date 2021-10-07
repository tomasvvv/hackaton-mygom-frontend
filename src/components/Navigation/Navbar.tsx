import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

import { routes } from '../../Routes';
import { StorageService } from '../../services/StorageService';

export const Navbar = React.memo(() => {
  const handleLogout = async () => {
    await StorageService.clearAccessToken();
    window.location.replace(routes.login);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Reservations
          </Typography>
          <Button component={Link} to={routes.users} color="inherit">
            Users
          </Button>
          <Button component={Link} to={routes.companyHome} color="inherit">
            Reservations
          </Button>
          <Button onClick={() => handleLogout()} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
});
