import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(() => ({
    card: {
        padding: '1em',
        width: '30vw',
        margin: '10em auto',
        textAlign: 'center'
    },

    form: {
        margin: '2em auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    },

    button: {
        marginTop: '2em',
        width: '80%',
        backgroundImage: 'linear-gradient(to bottom right, #ff55ff, #ff00ff)',
        color: "white"
    },

    input: {
        marginTop: 20,
        width: '80%'
    },

    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}))

const Login = (props) => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:4000/user/login', {
            method: 'POST',
            body: JSON.stringify({ user: { username: username, password: password } }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.token)
        })
    }

    return (
        <div>
            <Paper className={classes.card}>

                <Typography variant="h3">
                    Login
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>

                    <TextField 
                        className={classes.input}
                        onChange={(e) => setUsername(e.target.value)}  
                        value={username} 
                        variant="outlined"
                        label="Username"
                    />

                    <TextField 
                        className={classes.input}
                        onChange={(e) => setPassword(e.target.value)} 
                        label="Password" 
                        type="password" 
                        value={password} 
                        variant="outlined"
                    />

                    <Button 
                        variant="contained" 
                        color="primary" 
                        className={classes.button} 
                        type="submit"
                    >Login</Button>
                </form>
            </Paper>
        </div>
    )
}

export default Login;