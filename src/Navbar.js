import React, { Component } from 'react';
import styles from './Styles/NavbarStyles';
import {withStyles} from "@material-ui/core/styles"
import {AppBar, Toolbar, IconButton, Typography, Switch, InputBase} from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search"

class Navbar extends Component {
    state = {  }
    render() { 
        const {classes} = this.props;
        return ( 
            <div className={classes.root}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit">
                            <span>:)</span>
                        </IconButton>
                        <Typography className={classes.title} variant='h6' color="inherit">
                            App Title
                        </Typography>
                        <Switch/>
                        <div className={classes.grow}></div>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase placeholder="Search..." classes={{
                                root : classes.inputRoot,
                                input: classes.inputInput
                            }} />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
         );
    }
}
 
export default withStyles(styles)(Navbar);