import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  

 const MenuBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Formación
              </Typography>
              <Button color="inherit">Login</Button>
              <Button color="inherit" href="/items">Items</Button>
              <Button color="inherit" href="/prueba">Prueba</Button>
            </Toolbar>
          </AppBar>
        </div>
      );
}
export default MenuBar
