import React from 'react';
import { makeStyles } from '@material-ui/core';

import Accordion from '../components/accordion/Accordion';
import Container from '../components/container/Container';
import DateLine from '../components/date/DateLine';

const useStyles = makeStyles(() => ({
  title: {
    textAlign: 'center',
  },
}));

const Home: React.FC = (): JSX.Element => {
  const classes = useStyles();

  const accordionData = [
    {
      summary: {
        title: 'Open space',
        spaces: {
          free: 5,
          total: 30,
        },
      },
      details: [
        {
          title: 'Table nr. 1',
          employer: 'Kestis',
          isReserved: true,
        },
        {
          title: 'Table nr. 2',
          employer: '-',
          isReserved: false,
        },
        {
          title: 'Table nr. 3',
          employer: 'Antanas',
          isReserved: true,
        },
        {
          title: 'Table nr. 3',
          employer: 'Jonas',
          isReserved: true,
        },
      ],
    },
    {
      summary: {
        title: 'Office #1',
        spaces: {
          free: 1,
          total: 3,
        },
      },
      details: [
        {
          title: 'Table nr. 1',
          employer: 'Jonukas',
          isReserved: true,
        },
        {
          title: 'Table nr. 2',
          employer: '-',
          isReserved: false,
        },
        {
          title: 'Table nr. 3',
          employer: 'Algis',
          isReserved: true,
        },
      ],
    },
  ];

  return (
    <Container>
      <h1 className={classes.title}>Reservation</h1>
      <DateLine />
      <Accordion accordionData={accordionData} />
    </Container>
  );
};

export default Home;
