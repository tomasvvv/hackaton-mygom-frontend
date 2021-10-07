/* eslint-disable */
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
  useAddSpaceMutation,
  useRemoveSpaceMutation,
  useGetSpacesQuery,
} from '../services/SpaceService';

const useSpaceStyles = makeStyles(() => ({
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

const Spaces = React.memo(() => {
  const classes = useSpaceStyles();
  const { data } = useGetSpacesQuery();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // eslint-disable-next-line no-unused-vars
  const [addSpace] = useAddSpaceMutation();
  const [removeSpace] = useRemoveSpaceMutation();

  const [name, setName] = useState('');
  const [maxPeople, setMaxPeople] = useState(1);

  const handleSubmit = (e: any) => {
    e.preventDefault?.();

    addSpace({
      name,
      maxPeople,
    });

    handleClose();
  };
  const handleDelete = (id: number) => {
    removeSpace(id);
  };

  return (
    <Container>
      <Box mt={5}>
        <Button variant='contained' type='submit' color='primary' onClick={handleOpen}>
          Add Space
        </Button>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Max people</TableCell>
              <TableCell>&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map(space => (
              <TableRow>
                <TableCell>{space.name}</TableCell>
                <TableCell>{space.maxPeople}</TableCell>
                <TableCell>
                  <Button onClick={() => handleDelete(space.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <div className={classes.modal}>
          <Typography variant='h5' mb='1rem'>
            Add space
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.fields}>
              <TextField
                required
                value={name}
                id='name'
                name='name'
                label='Name'
                onChange={e => setName(e.target.value)}
              />
              <TextField
                inputProps={{ min: 1, max: 100 }}
                type='number'
                required
                value={maxPeople}
                id='maxPeople'
                name='maxPeople'
                label='Max people'
                onChange={e => setMaxPeople(Number(e.target.value))}
              />
            </div>
            <Button
              variant='contained'
              type='submit'
              color='primary'
              className={classes.addButton}>
              Add
            </Button>
          </form>
        </div>
      </Modal>
    </Container>
  );
});

export default Spaces;
