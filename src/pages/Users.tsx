import React from 'react';
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

import { useAddUserMutation, useGetUsersQuery } from '../services/UserService';

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((user) => (
              <TableRow>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.role}</TableCell>
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
          <Typography variant="h5" mb="1rem">Add user</Typography>
          <form className={classes.form}>
            <div className={classes.fields}>
              <TextField required id="outlined-required" label="Name" />
              <TextField required id="outlined-required" label="Role" />
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
