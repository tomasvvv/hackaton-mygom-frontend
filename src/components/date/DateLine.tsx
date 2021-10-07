import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
}));

const DateLine = React.memo(() => {
  const [value, setValue] = useState(new Date());
  const classes = useStyles();
  const today = `${moment().format('dddd')}, ${moment().format('MMM Do')}`;

  return (
    <div className={classes.container}>
      <Typography variant="h6" mr="1rem">{today}</Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <DatePicker
            disablePast
            label="Reservation"
            openTo="day"
            value={value}
            onChange={(newValue) => {
              if (newValue) setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  );
});

export default DateLine;
