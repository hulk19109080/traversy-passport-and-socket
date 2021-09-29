import React from 'react'
import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core"
import VideoPlayer from './components/VideoPlayer'
import Notifications from './components/Notifications'
import Sidebar from './components/Sidebar'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Video-Call-App
    </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.wrapper}>

        <VideoPlayer />
        <Sidebar>
          <Notifications />
        </Sidebar>
      </div>
    </>
  );
};
export default App
