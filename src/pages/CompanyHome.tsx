import React from 'react';
import { Container } from '@mui/material';

import Accordion from '../components/Accordion';
import { useCompanyHomeStyle } from './CompanyHome.style';

const Home: React.FC = (): JSX.Element => {
  const classes = useCompanyHomeStyle();

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
      <Accordion accordionData={accordionData} />
    </Container>
  );
};

export default Home;
