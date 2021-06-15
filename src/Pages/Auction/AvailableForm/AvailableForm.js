import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CalendarIcon from '@material-ui/icons/CalendarToday';
import PeopleIcon from '@material-ui/icons/People';
import ScheduleIcon from '@material-ui/icons/Schedule';

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function AddressForm() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Offer details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs>
          <Typography variant="subtitle2" component="h3">
            5
          </Typography>
          <PeopleIcon />
        </Grid>
        <Grid item xs>
          <Typography variant="subtitle2" component="h3">
            4th July
          </Typography>
          <CalendarIcon />
        </Grid>
        <Grid item xs>
          <Typography variant="subtitle2" component="h3">
           12:30h
          </Typography>
          <ScheduleIcon />
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <Typography variant="h6" gutterBottom>
       Are you available?
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs>
          <Button variant="contained" color="secondary" className={classes.button} href="/" >No</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}