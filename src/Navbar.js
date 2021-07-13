import React, { Component } from 'react';
import styles from './Styles/NavbarStyles';
import {withStyles} from "@material-ui/core/styles"
import {AppBar, Toolbar, IconButton, Typography, Switch, InputBase} from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search"
import { ThemeContext } from './contexts/ThemeContext';
import { withLanguageContext } from './contexts/LanguageContext';

const data = {
    english :{
        head: "English",
        search:"Search"
    },
    french:{
        head: "French",
        search:"Chercher"
    },
    spanish:{
        head: "Spanish",
        search:"Buscar"
    }
};

class Navbar extends Component {
    static contextType = ThemeContext;
    render() { 
        const {classes} = this.props;
        const {isDarkMode, toggleTheme} = this.context;
        const {language} = this.props.languageContext;
        const {head, search} = data[language];
        return ( 
            <div className={classes.root}>
                <AppBar position="static" color={isDarkMode ? "secondary" : "primary"}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit">
                            <span>:)</span>
                        </IconButton>
                        <Typography className={classes.title} variant='h6' color="inherit">
                            {head}
                        </Typography>
                        <Switch onChange={toggleTheme} color={isDarkMode ? "primary" : "secondary"}/>
                        <div className={classes.grow}></div>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase placeholder={`${search}...`} classes={{
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
 
export default withLanguageContext(withStyles(styles)(Navbar));