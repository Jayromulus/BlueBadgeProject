import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

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
    let charspec = ['Universal'];
    let [check, setCheck] = useState(true);
    
    let [universal, setUniversal] = useState(true);
    console.log(universal)
    const handleChange = (e) => {
        // console.log(e);
        // console.log('CURRENT VALUE:',e.target.value)
        // console.log("universal", !/universal)
        // console.log("charspec", charspec)
        console.log("universal", universal)
        // console.log(charspec.includes(e.target.value))
        console.log(e.target.value)
        console.log("aboveternary", charspec)
        
        charspec.includes(e.target.value) ? charspec.splice(charspec.indexOf(e.target.value), 1) : charspec.push(e.target.value)
        if(charspec.includes('true')|| charspec.includes('false')){
            charspec.splice(charspec.indexOf('true'), 1);
            charspec.splice(charspec.indexOf('false'), 1);
        }
        if(!universal) {
            charspec.splice(charspec.indexOf('Universal'), 1)
            // console.log('universal no more')
        }
        props.setLocalCharSpec(charspec)
    }

    const universalHandle = () => {
        setUniversal(!universal)
        setCheck(!check)
        console.log(universal)
        console.log(check)
    }

    return (
        <div>
            <FormGroup aria-label="position" name="position" value={charspec} onChange={handleChange} row>
                <Grid item xs sm={12}>
                    <FormControlLabel
                        value={universal}
                        control={<Checkbox color="primary" />}
                        label='Universal'
                        labelPlacement='start'
                        onClick={universalHandle}
                        checked={universal}
                    />
                </Grid>

                {
                    !universal ?
                        <React.Fragment>


                            {/* // BlazBlue */}
                            {bbChar.map((character, index) => {
                                return (
                                    <Grid item key={index} xs sm={4}>
                                        <FormControlLabel
                                            value={character}
                                            control={<Checkbox color="primary" />}
                                            label={character}
                                            labelPlacement='start'
                                        />
                                    </Grid>
                                )
                            })}
                            {/* // Persona */}
                            {paChar.map((character, index) => {
                                return (
                                    <Grid item key={index} xs sm={4}>
                                        <FormControlLabel
                                            value={character}
                                            control={<Checkbox color="primary" />}
                                            label={character}
                                            labelPlacement='start'
                                        />
                                    </Grid>
                                )
                            })}
                            {/* // UNI */}
                            {uniChar.map((character, index) => {
                                return (
                                    <Grid item key={index} xs sm={4}>
                                        <FormControlLabel
                                            value={character}
                                            control={<Checkbox color="primary" />}
                                            label={character}
                                            labelPlacement='start'
                                        />
                                    </Grid>
                                )
                            })}
                            {/* // RWBY */}
                            {rwbyChar.map((character, index) => {
                                return (
                                    <Grid item key={index} xs sm={4}>
                                        <FormControlLabel
                                            value={character}
                                            control={<Checkbox color="primary" />}
                                            label={character}
                                            labelPlacement='start'
                                        />
                                    </Grid>
                                )
                            })}
                            {/* // AH */}
                            {ahChar.map((character, index) => {
                                return (
                                    <Grid item key={index} xs sm={4}>
                                        <FormControlLabel
                                            value={character}
                                            control={<Checkbox color="primary" />}
                                            label={character}
                                            labelPlacement='start'
                                        />
                                    </Grid>
                                )
                            })}
                        </React.Fragment> : null
                }

            </FormGroup >
        </div >
    )
}

export default CharSpec