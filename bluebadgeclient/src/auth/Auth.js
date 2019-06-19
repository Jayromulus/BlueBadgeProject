import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Login from './Login';
import Signup from './Signup';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Auth = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={6}>
                <Grid item xs="12" sm="6">
                    <Login updateToken={props.updateToken} />
                </Grid>
                <Grid item xs="12" sm="6">
                    <Signup updateToken={props.updateToken} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Auth;