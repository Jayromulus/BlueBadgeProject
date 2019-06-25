import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import CharSel from './characterSelect';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper'
import Modal from '@material-ui/core/Modal'
import Profile from '../auth/Profile'

const useStyles = makeStyles({
    navImg: {
        height: '6em',
        marginTop: '1em'
    },

    navStyle: {
        paddingRight: '1em'
    },

    logout: {
        marginBottom: 'auto',
        marginLeft: '2em'
    },
    selectedStyling: {
        margin: '.75em 1em',
        color: 'white',
        textShadow: '1px 1px 5px black',
        width: '100%'
    },
    modalStyle: {
        overflowY: 'scroll'
    }

});

export default function TemporaryDrawer(props) {
    //   const classes = useStyles();
    const [imageSource, setImageSource] = useState('')
    const [state, setState] = useState(true);
    const [open, setOpen] = useState(false)

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

     // Open the modal
     const handleOpen = () => {
        setOpen(true);
    };

    // Close the modal
    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Typography className={classes.selectedStyling} variant="h3">{props.selected}{props.second !== 'solo' && props.second !== 'Solo' ? <React.Fragment>/{props.second}</React.Fragment> : null}</Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography align='right'>
                    <Button className={classes.logout} onClick={props.clearToken}>Logout</Button>
                    <Button className={classes.logout} onClick={handleOpen}>Profile</Button>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={open}
                        onClose={handleClose}
                        className={classes.modalStyle}
                    >
                        <Paper>
                            <Profile user={props.user} handleClose={handleClose} />
                        </Paper>
                    </Modal>
                </Typography>
            </Grid>
            <Grid item xs>
                <Typography className={classes.navStyle} align='right'>
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