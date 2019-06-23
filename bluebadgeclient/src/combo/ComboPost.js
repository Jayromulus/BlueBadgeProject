import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

import PostCombo from './postComponents/PostCombo'
import CounterHit from './postComponents/CounterHit'
import ReasonanceBlaze from './postComponents/ReasonanceBlaze';
import Partner from'./postComponents/Partner'
import CharSpec from './postComponents/CharSpec';

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        outline: 'none',
        height: '80vh',
        overflowY: 'scroll',
        overflowX: 'hidden',
        textAlign: 'center'
    },

    postStyle: {
        textAlign: 'center',
        margin: 'auto'
    },
}))

function getModalStyle() {

    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    };
}

const ComboPost = (props) => {
    const [open, setOpen] = useState(false);
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);

    // local variable storage
    const [localCombo, setLocalCombo] = useState('');
    const [localCH, setLocalCH] = useState(false);
    const [localRB, setLocalRB] = useState(false);
    const localPoint = props.selected;
    const [localPartner, setLocalPartner] = useState('Solo');
    const [localCharSpec, setLocalCharSpec] = useState([]);
    const [localLink, setLocalLink] = useState('');
    const [localNotes, setLocalNotes] = useState('');


    // Open the modal
    const handleOpen = () => {
        setOpen(true);
    };

    // Close the modal
    const handleClose = () => {
        setOpen(false);
    };

    
    
    

    const classes = useStyles()
    return (
        <React.Fragment>
            <Typography onClick={handleOpen} variant="h3" className={classes.postStyle} gutterBottom>
                <i>Post your own!</i>
            </Typography>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <Paper style={modalStyle} className={classes.paper}>
                    {/* Route Input */}
                    <PostCombo selected={props.selected} localCombo={localCombo} setLocalCombo={setLocalCombo}/>
                    {/* Counter Hit */}
                    <CounterHit localCH={localCH} setLocalCH={setLocalCH}/>
                    {/* Reasonance Blaze */}
                    <ReasonanceBlaze localRB={localRB} setLocalRB={setLocalRB}/>
                    {/* Partner */}
                    <Partner localPoint={localPoint} setLocalPartner={setLocalPartner}/>
                    {/* Character Specific */}
                    <CharSpec setLocalCharSpec={setLocalCharSpec}/>

                    <Button onClick={(e) =>{console.log('Combo:',localCombo, '\nCounterHit:', localCH, '\nReasonance:', localRB, '\nPoint:', localPoint, '\nPartner:', localPartner, '\nCharacter Specific:', localCharSpec)}}>log values</Button>
                </Paper>
            </Modal>
        </React.Fragment>
    )
}

export default ComboPost




        // figure out how to tale the characters out of the array return to get a normal list back
// does .map work on a string since its an array of characters?