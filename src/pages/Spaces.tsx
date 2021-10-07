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

import { useAddSpaceMutation, useGetSpacesQuery } from '../services/SpaceService';

const Spaces = React.memo(() => {
  const { data } = useGetSpacesQuery();
  // eslint-disable-next-line no-unused-vars
  const [addSpace] = useAddSpaceMutation();

  return (
    <Container>
      <Box mt={5}>
        <Button variant="contained" type="submit" color="primary">
          Add Space
        </Button>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Max people</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((space) => (
              <TableRow>
                <TableCell>{space.name}</TableCell>
                <TableCell>{space.maxPeople}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
});

export default Spaces;
