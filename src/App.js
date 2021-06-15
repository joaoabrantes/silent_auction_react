import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {Auction} from './Pages/Auction/Auction';
import {Home} from './Pages/Home/Home';
import {Profile} from './Pages/Profile/Profile';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import GavelIcon from '@material-ui/icons/Gavel';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

const useStyles = makeStyles(() => ({
  body: {
    bottom: '0px',
    left: '0px',
    right: '0px',
    width: '100%',
    textAlign: 'center',
    paddingBottom: '56px',
  },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  nav: {
    backgroundColor: 'lightblue'
  }
}));

const App = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <Router>
      <div className={classes.body}>

        {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/auction">
            <Auction />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <div className={classes.stickToBottom}>
        <BottomNavigation value={value} onChange={handleChange} className={classes.nav} showLabels>
          <BottomNavigationAction component={Link} to="/" label="Home" value="home" icon={<HomeIcon />} />
          <BottomNavigationAction component={Link} to="/auction" label="Auction" value="auction" icon={<GavelIcon />} />
          <BottomNavigationAction component={Link} to="/profile" label="Profile" value="profile" icon={<PersonIcon />} />
        </BottomNavigation>
      </div>
    </Router>
  );
};

export default App;
