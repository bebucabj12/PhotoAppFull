import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import auth from '../auth'




const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    navColor: {
      backgroundColor: '#643D9C',
    },
    searchIcon: {
      // width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
  
  
  class NavBarCustom extends Component {
   
    //Redireccionado a 'login' despues de cerrar sesion
    logout = () => { 
      (localStorage.removeItem('user'))?
      (
        console.log('no')      
      )
      :
      (
        this.props.history.push('/login')
      )
    }
    
    
    render() {
      
      const { classes } = this.props;
      const { history } = this.props;

      return (
        <div className={classes.root}>
        <Fragment>
          {
            //NavBar si esta logeado
          (localStorage.getItem('user')) ?
          (
            <AppBar className={classes.navColor} position="absolute">
            <Toolbar>
            <IconButton className={classes.searchButton} color="inherit">
              <SearchIcon />
            </IconButton>
            <Button onClick={() => history.push('/profile')} color="inherit" className={classes.grow}>
              {auth.user.email}
            </Button>
            <Button onClick={this.logout} color="inherit">
              Logout
            </Button>
            <Button onClick={() => history.push('/')} color="inherit">
              Home
            </Button>
            </Toolbar>
            </AppBar>
          )
          : //NavBar si no esta logueado
            <AppBar className={classes.navColor} position="absolute">
            <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Button onClick={() => history.push('/')} color="inherit" className={classes.grow}>
              PhotoApp
            </Button>
            <Button color="inherit" onClick={() => history.push('/login')}>
              Login
            </Button>
            <Button color="inherit" onClick={() => history.push('/register')}>
              Sign Up
            </Button>
            </Toolbar>
            </AppBar>
          }
        </Fragment>
  </div>
  );

  
};
}

export default withStyles(styles)(withRouter(NavBarCustom));
