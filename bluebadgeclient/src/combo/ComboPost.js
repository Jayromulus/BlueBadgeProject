import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import PostCombo from './postComponents/PostCombo'
import CounterHit from './postComponents/CounterHit'
import ReasonanceBlaze from './postComponents/ReasonanceBlaze';
import Partner from './postComponents/Partner'
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
    const [localCorner, setCorner] = useState(false) //SET THIS SOMEWHERE
    const localPoint = props.selected;
    const [localPartner, setLocalPartner] = useState('Solo');
    const [localCharSpec, setLocalCharSpec] = useState(['Universal']);
    const [localLink, setLocalLink] = useState('');
    const [localNotes, setLocalNotes] = useState('');
    const [localDamage, setLocalDamage] = useState(0);


    // Open the modal
    const handleOpen = () => {
        setOpen(true);
    };

    // Close the modal
    const handleClose = () => {
        setOpen(false);
    };


    const postRoute = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/route/new', {
            method: 'POST',
            body: JSON.stringify({
                combo: {
                    route: localCombo,
                    point: localPoint,
                    counterHit: localCH,
                    partner: localPartner,
                    video: localLink,
                    charSpec: localCharSpec,
                    addNotes: localNotes,
                    damage: localDamage,
                    corner: localCorner,
                    reasonance: localRB
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(res => res.json())
        .then(logdata => {console.log(logdata);let sel = props.selected; props.setSelected(''); props.setSelected(sel)})
    }


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
                    <PostCombo selected={props.selected} localCombo={localCombo} setLocalCombo={setLocalCombo} />
                    {/* Counter Hit */}
                    <CounterHit localCH={localCH} setLocalCH={setLocalCH} />
                    {/* Reasonance Blaze */}
                    <ReasonanceBlaze localRB={localRB} setLocalRB={setLocalRB} />
                    {/* Partner */}
                    <Partner localPoint={localPoint} setLocalPartner={setLocalPartner} />
                    {/* Character Specific */}
                    <CharSpec setLocalCharSpec={setLocalCharSpec} />
                    {/* Video Link */}
                    <TextField
                        onChange={(e) => { setLocalLink(e.target.value) }}
                        label="Video Link"
                        type="text"
                        value={localLink}
                        variant="outlined"
                    />
                    {/* Additional Notes */}
                    <TextField
                        onChange={(e) => { setLocalNotes(e.target.value) }}
                        label="Additional Notes"
                        type="text"
                        value={localNotes}
                        variant="outlined"
                    />
                    {/* Damage */}
                    <TextField
                        onChange={(e) => { setLocalDamage(e.target.value) }}
                        label="Damage"
                        type="text"
                        value={localDamage}
                        variant="outlined"
                    />

                    <Button onClick={(e) => { postRoute(e); handleClose() }}>log values</Button>
                </Paper>
            </Modal>
        </React.Fragment>
    )
}

export default ComboPost




        // figure out how to tale the characters out of the array return to get a normal list back
// does .map work on a string since its an array of characters?