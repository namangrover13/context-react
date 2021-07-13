import { Avatar, Button, Checkbox, FormControl, FormControlLabel, Input, InputLabel, MenuItem, Paper, Select, Typography, withStyles } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import React, { Component } from 'react';
import { LanguageContext } from './contexts/LanguageContext';
import styles from './Styles/FormStyles';

const data = {
    english :{
        email: "Email",
        pwd:"Password",
        signin:"Sign In",
        remember:"Remember Me"
    },
    french:{
        email:"Courrier électronique",
        pwd:"Le mot de passe",
        signin:"S'identifier",
        remember:"Souviens-toi De Moi"
    },
    spanish:{
        email: "El Correo Electrónico",
        pwd:"Contraseña",
        signin:"Iniciar Sesión",
        remember:"Recuérdame"
    }
};

class Form extends Component {
    static contextType = LanguageContext;
    render() { 
        const {language, changeLanguage} = this.context;
        const {classes} = this.props;
        const {email, pwd, signin, remember} = data[language];
        return ( 
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlined />
                    </Avatar>
                    <Typography variant='h5'>{signin}</Typography>
                    <Select value={language} onChange={changeLanguage}>
                        <MenuItem value="english">English</MenuItem>
                        <MenuItem value="spanish">Spanish</MenuItem>
                        <MenuItem value="french">French</MenuItem>
                    </Select>
                    <form className={classes.from}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">{email}</InputLabel>
                            <Input id="email" name="email" autofocus />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="pwd">{pwd}</InputLabel>
                            <Input id="pwd" name="pwd" />
                        </FormControl>
                        <FormControlLabel label={remember} control={<Checkbox color="primary"/>}></FormControlLabel>
                        <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit} >{signin}</Button>
                    </form>
                </Paper>
            </main>
         );
    }
}
 
export default withStyles(styles)(Form);