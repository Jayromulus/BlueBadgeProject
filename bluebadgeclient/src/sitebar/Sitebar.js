import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CharSel from './characterSelect';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    navImg: {
        height: '5em',
        marginTop: '1em'
    },
});

export default function TemporaryDrawer(props) {
    //   const classes = useStyles();
    const [state, setState] = React.useState({
        right: true
    });

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, 'right': open });
    };

    const sideList = () => (
        <CharSel setState={setState} state={state} />
        // <h1>helo</h1>
    );

    const classes = useStyles();
    return (
        <Grid container spacing={4}>
            <Grid item xs="8">
            </Grid>
            <Grid item >
                <Typography align='right'>
                    <Button onClick={props.clearToken} color="danger">Logout</Button>
                    <img alt="selectedchar" src='http://www.dustloop.com/wiki/images/5/59/BBTag_Makoto_Icon.png' className={classes.navImg} onClick={toggleDrawer('right', true)} />
                    <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                        {sideList('right')}
                    </Drawer>
                </Typography>
            </Grid>
        </Grid>
    );
}