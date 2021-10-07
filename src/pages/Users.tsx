import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import {
  useAddUserMutation,
  useGetUsersQuery,
  useRemoveUserMutation,
} from '../services/UserService';

const useUserStyles = makeStyles(() => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30rem',
    background: 'white',
    border: '2px solid #000',
    padding: '1rem',
  },
  fields: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  addButton: {
    marginTop: '2rem',
  },
  form: {
    textAlign: 'center',
  },
}));
const Users = React.memo(() => {
  const classes = useUserStyles();
  const { data } = useGetUsersQuery();
  // eslint-disable-next-line no-unused-vars
  const [addUser] = useAddUserMutation();
  const [removeUser] = useRemoveUserMutation();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault?.();

    addUser({
      name,
      role,
    });
  };

  const handleDelete = (id: string) => {
    removeUser(id);
  };

  return (
    <Container>
      <Box mt={5}>
        <Button variant="contained" type="button" color="primary" onClick={handleOpen}>
          Add User
        </Button>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((user) => (
              <TableRow>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button onClick={() => handleDelete(user.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={classes.modal}>
          <Typography variant="h5" mb="1rem">
            Add user
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.fields}>
              <TextField
                required
                value={name}
                id="name"
                name="name"
                label="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                required
                value={role}
                id="role"
                name="role"
                label="Role"
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              className={classes.addButton}
            >
              Add
            </Button>
          </form>
        </div>
      </Modal>
    </Container>
  );
});

export default Users;
