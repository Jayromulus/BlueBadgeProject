import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import CharSel from './characterSelect';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    navImg: {
        height: '6em',
        marginTop: '1em'
    },

    navStyle: {
        marginRight: '1em'
    },

    logout: {
        marginBottom: 'auto'
    },
    selectedStyling: {
        margin: '.75em 1em',
        color: 'white',
        textShadow: '1px 1px 5px black',
        width:'100%'
    }
});

export default function TemporaryDrawer(props) {
    //   const classes = useStyles();
    const [imageSource, setImageSource] = useState('')
    const [state, setState] = useState(true);

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };

    const sideList = () => (
        <CharSel
            setImageSource={setImageSource}
            setState={setState}
            state={state}
            setSelected={props.setSelected}
            setSecond={props.setSecond}
        />
        // <h1>helo</h1>
    );

    const classes = useStyles();
    return (
        <Grid container spacing={4}>
            <Grid item xs={6}>
                <Typography className={classes.selectedStyling} variant="h3">{props.selected}{props.second !== 'solo' && props.second !== 'Solo' ? <React.Fragment>/{props.second}</React.Fragment> : null }</Typography>
            </Grid>
            <Grid item xs>
                <Typography className={classes.navStyle} align='right'>
                    <Button className={classes.logout} onClick={props.clearToken}>Logout</Button>
                    <img alt="selectedchar" src={imageSource} className={classes.navImg} onClick={toggleDrawer(true)} />
                    {console.log('state:', state)}
                    <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
                        {sideList('right')}
                    </Drawer>
                </Typography>
            </Grid>
        </Grid>
    );
}