import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
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
    }
}));

const ComboDisplay = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="../../assets/youtube.png" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{props.combos.damage}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
    )
}

export default ComboDisplay

// <>
//             <Grid container spacing={2} >
//                 <Grid item sm={3}>
//                     <h1 className={classes.names}>{props.combos.point}</h1>
//                     <h6 className={classes.names}>{props.combos.partner}</h6>
//                 </Grid>
//                 <Grid item sm></Grid>
//                 <Grid item sm={4}>
//                     <h3>help me</h3>
//                 </Grid>
//             </Grid>
//             <Grid container spacing={2}>
//                 <Grid item xs>
//                     <p>{props.combos.route}</p>
//                 </Grid>
//             </Grid>
//         </>