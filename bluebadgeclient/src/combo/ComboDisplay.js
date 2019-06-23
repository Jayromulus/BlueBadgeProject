import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        
        // maxWidth: 500,
        margin: "2em auto"
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    divStyle: {
        // overflow: 'hidden',
        wordWrap: 'break-word',
        fontSize: '1em'
    },

    comboStyle: {
        wordWrap: 'break-word',
        width: '92.5%',
        paddingRight: '1em'
    }
}));

const ComboDisplay = (props) => {
    const classes = useStyles()
    return (
        <>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm container>
                        <Grid item sm={11} xs={12} container direction="column" spacing={2}>
                            <section className={classes.comboStyle}>
                                <Grid item xs>
                                    {/* <Typography gutterBottom variant="subtitle1">
                                    {props.combos.point}/{props.combos.partner}
                                </Typography> */}
                                    <Typography variant="h4" >
                                        {props.combos.route}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {props.combos.charSpec}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                        Remove
                                </Typography>
                                </Grid>
                            </section>
                        </Grid>
                        <Grid item sm={1} xs={12}>
                            <Typography variant="h5">Damage: {props.combos.damage}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default ComboDisplay