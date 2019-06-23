import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const bbChar = [
    'Azrael', 'Es', 'Hakumen', 'Hazama', 'Izayoi', 'Jin', 'Jubei', 'Mai', 'Makoto', 'Naoto K', 'Nine', 'Noel', 'Nu', 'Platinum', 'Rachel', 'Ragna', 'Tager'
]

const paChar = [
    'Aegis', 'Akihiko', 'Chie', 'Kanji', 'Labrys', 'Mitsuru', 'Naoto S', 'Teddie', 'Yosuke', 'Yu', 'Yukiko'
]

const uniChar = [
    'Carmine', 'Gordeau', 'Hyde', 'Linne', 'Merkava', 'Mika', 'Orie', 'Seth', 'Vatista', 'Waldstein', 'Yuzuriha'
]

const rwbyChar = [
    'Blake', 'Ruby', 'Weiss', 'Yang'
]

const ahChar = [
    'Heart'
]


const CharSpec = (props) => {

    let charspec = []

    const handleChange = (e) => {
        props.setLocalCharSpec(e.target.value)
    }

    return (
        <div>
            <FormGroup aria-label="position" name="position" value={charspec} onChange={handleChange} row>
                <Grid container spacing={1}>
                    {bbChar.map((character, index) => {
                        return (
                            <Grid item key={index} xs={3}>
                                <FormControlLabel
                                    value={character}
                                    control={<Checkbox color="primary" />}
                                    label={character}
                                    labelPlacement='start'
                                />
                            </Grid>
                        )
                    })}
                    {paChar.map((character, index) => {
                        return (
                            <Grid item key={index} xs={3}>
                                <FormControlLabel
                                    value={character}
                                    control={<Checkbox color="primary" />}
                                    label={character}
                                    labelPlacement='start'
                                />
                            </Grid>
                        )
                    })}
                    {uniChar.map((character, index) => {
                        return (
                            <Grid item key={index} xs={3}>
                                <FormControlLabel
                                    value={character}
                                    control={<Checkbox color="primary" />}
                                    label={character}
                                    labelPlacement='start'
                                />
                            </Grid>
                        )
                    })}
                    {rwbyChar.map((character, index) => {
                        return (
                            <Grid item key={index} xs={3}>
                                <FormControlLabel
                                    value={character}
                                    control={<Checkbox color="primary" />}
                                    label={character}
                                    labelPlacement='start'
                                />
                            </Grid>
                        )
                    })}
                    {ahChar.map((character, index) => {
                        return (
                            <Grid item key={index} xs={3}>
                                <FormControlLabel
                                    value={character}
                                    control={<Checkbox color="primary" />}
                                    label={character}
                                    labelPlacement='start'
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </FormGroup>
        </div >
    )
}

export default CharSpec