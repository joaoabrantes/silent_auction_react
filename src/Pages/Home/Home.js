import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import CalendarIcon from '@material-ui/icons/CalendarToday';
import PeopleIcon from '@material-ui/icons/People';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    height: '100%',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(500 + theme.spacing(2) * 2)]: {
      width: 500,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const events = [
  {name: 'Lizard tour', image: './images/reptile.jpeg', people: 5, day: '4th July', hour: '12:30h'},
  {name: 'Surf lesson', image: './images/surf.jpeg', people: 2, day: '5th July', hour: '13:30h'},
  {name: 'Pico Ruivo Tour', image: './images/hiking.jpeg', people: 3, day: '6th July', hour: '10:30h'},

];

export const Home = () => {
  const classes = useStyles();
  console.log(events);
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Typography component="h2" variant="h4" align="center">
            Next Events
        </Typography>
        <br></br>
        {events.map(event => (
          <div>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  alt="GeeksforGeeks"
                  component="img"
                  title="GeeksforGeeks"
                  height="150"
                  image={event.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {event.name}
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs>
                      <Typography variant="subtitle2" component="h3">
                        {event.people}
                      </Typography>
                      <PeopleIcon />
                    </Grid>
                    <Grid item xs>
                      <Typography variant="subtitle2" component="h3">
                        {event.day}
                      </Typography>
                      <CalendarIcon />
                    </Grid>
                    <Grid item xs>
                      <Typography variant="subtitle2" component="h3">
                        {event.hour}
                      </Typography>
                      <ScheduleIcon />
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
            <Box m={2} />
          </div>
        ))}
      </main>
    </React.Fragment>
  );
};
