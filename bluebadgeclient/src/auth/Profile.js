import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import ComboDisplay from '../combo/ComboDisplay'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    button: {
        // height: '5em;',
        fontSize: '2em'
    }
})

const Profile = (props) => {
    const [combos, setCombos] = useState([{ id: 0, counterHit: false, createdAt: '', addNoted: '', charSpec: '', owner: '', partner: '', point: '', route: '', updatedAt: '', video: '', damage: 0 }]);

    const classes = useStyles()

    //triggers whem local vars are changed
    useEffect(() => { fetchUserCombos() }, [props.selected])

    const fetchUserCombos = () => {
        if (props.user !== '') {
            let url = `http://localhost:4000/route/${props.user}`;
            console.log('selected', props.selected)

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
    }

    const deletePost = (e) => {
        // console.log('WORK DAMMIT')
        // console.log(e.id)
        let url = `http://localhost:4000/route/delete/${e.id}`

        fetch(url, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            })
        }).then(() => fetchUserCombos())
    }


    const updatePost = (e) => {
        // console.log('WORK DAMMIT')
        // console.log(e.id)
        let url = `http://localhost:4000/route/update/${e.id}`

        fetch(url, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            })
        }).then(() => fetchUserCombos())
    }

    return (
        <section>
            <Grid container>
                <Grid item xs={8}>
                    <Typography variant="h2">{props.user}</Typography>
                </Grid>
                <Grid item xs align="right">
                    <Button className={classes.button} onClick={props.handleClose}>X</Button>
                </Grid>
            </Grid>
            <Grid container>

                <Grid item>
                    {combos[0] !== undefined ?
                        <>
                            {combos.map((data, index) => {
                                return <Paper key={index}>
                                    <ComboDisplay combos={data} />
                                    <Button color="secondary" onClick={() => deletePost(data)}>Delete</Button>
                                    <Button color="primary" onClick={() => updatePost(data)}>Update</Button>
                                    <Modal
                                        aria-labelledby="simple-modal-title"
                                        aria-describedby="simple-modal-description"
                                        open={open}
                                        onClose={handleClose}
                                        className={classes.modalStyle}
                                    >
                                        <Paper>
                                            
                                        </Paper>
                                    </Modal>
                                </Paper>
                            })}
                        </> :
                        <Paper>
                            <Grid item xs={12} sm container>
                                <Grid item xs>
                                    <Typography variant="h3" gutterBottom>No Combos Yet</Typography>
                                </Grid>
                            </Grid>
                        </Paper>}
                </Grid>
            </Grid>
        </section>
    )
}

export default Profile