import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import ComboDisplay from './ComboDisplay';
import ComboPost from './ComboPost'
// import youtube from '../assets/youtube.png'
import './combos.css';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },

    noneYet: {
        padding: '2em',
        
        // maxWidth: 500,
        margin: "2em auto"
    }
});

const Combos = (props) => {
    const classes = useStyles();
    const [combos, setCombos] = useState([{ id: 0, counterHit: false, createdAt: '', addNoted: '', charSpec: '', owner: '', partner: '', point: '', route: '', updatedAt: '', video: '', damage: 0 }]);
    

    //triggers whem local vars are changed
    useEffect(() => { fetchCombos() }, [props.selected])

    const fetchCombos = () => {
        if(props.selected !== '') {
        let url = `http://localhost:4000/route/${props.selected}/Solo`;
        console.log('selected',props.selected)

        fetch(url, {
            headers: {
                'Authorization': localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        }).then(
            res => res.json()
        ).then(
            text => setCombos(text.combos)
        ).catch(
            err => console.log(err)
        )}
    }

    // console.log(combos[0])
    return (
        <div className={classes.root}>
            <Grid container alignItems="stretch" spacing={1}>
                <Grid item xs></Grid>
                {/* <img alt="none" src={youtube}/> */}
                <Grid item xs={10} >
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm container>
                                <Grid item xs={11} container direction="column" className={classes.comboStyle} spacing={2}>
                                    <Grid item xs>
                                        <ComboPost setSelected={props.setSelected} sessionToken={props.sessionToken} selected={props.selected}/>
                                    </Grid>
                                </Grid>
                                <Grid item xs={1} >
                                    <Typography variant="h3">+</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                    {combos[0] !== undefined ? 
                        <>
                            {combos.map((data, index) => { return <ComboDisplay combos={data} key={index}/> })}
                        </> : 
                        <Paper>
                            <Grid item xs={12} sm container>
                                <Grid item xs>
                                    <Typography variant="h3" className={classes.noneYet} gutterBottom>No Combos Yet</Typography>
                                </Grid>
                            </Grid>
                        </Paper>}
                </Grid>
                <Grid item xs></Grid>
            </Grid>
        </div>
    )
}

export default Combos