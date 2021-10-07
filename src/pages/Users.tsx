import React from 'react';
import {
  Box,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

import { useGetUsersQuery } from '../services/UserService';

const Users = React.memo(() => {
  const { data } = useGetUsersQuery();

  return (
    <Container>
      <Box mt={5}>
        <Button variant="contained" type="submit" color="primary">
          Add User
        </Button>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((user) => (
              <TableRow>
                <TableCell>{user.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

    </Container>
  );
});

export default Users;
