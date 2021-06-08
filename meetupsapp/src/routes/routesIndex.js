import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';

import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

//*Layouts
import { CalculateBeers } from '../layout'
import { MeetupList } from '../layout'
import { Login } from '../layout'

//*hooks
import {useLogin} from '../hooks'

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2),
  },
  root: {
    display: 'flex',
    flex: 1
  },
  drawer: {
    flex: 1,
    // [theme.breakpoints.up('sm')]: {
    //   width: drawerWidth,
    //   flexShrink: 0,
    // },
  },
  drawerPaper: {
    // width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const Routes = () => {
  const classes = useStyles()
  const {username} = useLogin()
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const list = (anchor) => (
    <div
      // className={clsx(classes.list, {
        // [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      // })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        {['Calculo de birras'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {username && (
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap>
            {username ? 'Responsive drawer' : 'Sign In'}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer 
        variant="temporary"
        // anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}>
        {list('left')}
      </Drawer>
      {/* <main className={classes.content}> */}
      <nav className={classes.drawer}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
          <Switch>
            {username ? <Route path="/" component={CalculateBeers} /> : <Route path="/" component={Login} />}
            <Route exact path="/login" component={Login}></Route> 
            <Route exact path="/calculateBeers" component={CalculateBeers}></Route>
            <Route exact path="/meetupList" component={MeetupList}></Route>
          </Switch>
        </Grid>
        {/* <Hidden smUp implementation="css">
        </Hidden>
        <Hidden xsDown implementation="css">
          <Switch>
            <Route path="/" component={CalculateBeers} />
            <Route exact path="/calculateBeers" component={CalculateBeers}></Route>
          </Switch> 
        </Hidden> */}
      </nav>
      {/* </main> */}
    </div>
  )
}

export { Routes }