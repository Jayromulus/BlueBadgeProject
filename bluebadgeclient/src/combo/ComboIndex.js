import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import ComboDisplay from './ComboDisplay'
import './combos.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

const Combos = (props) => {
    const classes = useStyles();
    const [combos, setCombos] = useState([{ id: 0, counterHit: false, createdAt: '', addNoted: '', charSpec: '', owner: '', partner: '', point: '', route: '', updatedAt: '', video: '', damage: 0 }]);
    //local
    const [point, setPoint] = useState('Makoto');
    const [partner, setPartner] = useState('Solo');

    //triggers whem local vars are changed
    useEffect(() => { fetchCombos() }, [point, partner])

    const fetchCombos = () => {
        setPoint('Makoto');
        setPartner('Solo');
        // console.log(point, partner);
        let url = `http://localhost:4000/route/${point}/${partner}`;

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
        )
    }

    console.log(combos[0])
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs></Grid>

                <Grid item xs='10' alignItems='stretch'>
                    {combos[0] !== undefined ? <>{combos.map((data, index) => { return <ComboDisplay combos={data} /> })}</> : 'No Combos Yet'}
                </Grid>
                <Grid item xs></Grid>
            </Grid>
        </div>
    )
}

export default Combos