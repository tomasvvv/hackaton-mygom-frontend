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
          free: 1,
          total: 10,
        },
      },
      details: [
        {
          title: 'Table nr. 1',
          employer: 'Jonukas',
        },
        {
          title: 'Table nr. 2',
          employer: '-',
        },
        {
          title: 'Table nr. 3',
          employer: 'Antanas',
        },
      ],
    },
    {
      summary: {
        title: 'Office #1',
        spaces: {
          free: 8,
          total: 15,
        },
      },
      details: [
        {
          title: 'Table nr. 1',
          employer: 'Jonukas',
        },
        {
          title: 'Table nr. 2',
          employer: '-',
        },
        {
          title: 'Table nr. 3',
          employer: 'Antanas',
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
