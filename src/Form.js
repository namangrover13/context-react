import { Avatar, Button, Checkbox, FormControl, FormControlLabel, Input, InputLabel, MenuItem, Paper, Select, Typography, withStyles } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import React, { Component } from 'react';
import styles from './Styles/FormStyles';

class Form extends Component {
    state = {  }
    render() { 
        const {classes} = this.props;
        return ( 
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlined />
                    </Avatar>
                    <Typography variant='h5'>Sign In</Typography>
                    <Select value="english">
                        <MenuItem value="english">English</MenuItem>
                        <MenuItem value="spanish">Spanish</MenuItem>
                        <MenuItem value="french">French</MenuItem>
                    </Select>
                    <form className={classes.from}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" name="email" autofocus />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="pwd">Password</InputLabel>
                            <Input id="pwd" name="pwd" />
                        </FormControl>
                        <FormControlLabel label="Remember Me" control={<Checkbox color="primary"/>}></FormControlLabel>
                        <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit} >Sign In</Button>
                    </form>
                </Paper>
            </main>
         );
    }
}
 
export default withStyles(styles)(Form);