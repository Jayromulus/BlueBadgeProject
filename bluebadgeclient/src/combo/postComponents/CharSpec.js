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
    let [ charArr, setCharArr ] = useState(['Universal'])
    let [universal, setUniversal] = useState(true);
    
    const handleClick = (e) => {
        let name = e.target.name;
        if(name === 'universal' && universal === true) {
            setUniversal(false);
            let newArr = Array.from(charArr);
            newArr.shift();
            setCharArr(newArr);
        console.log('top:',charArr)

        } else if (name === 'universal' && universal === false) {
            setUniversal(true);
            setCharArr(['Universal', ...charArr])
        console.log('else if:',charArr)

        } else {
            if(charArr.includes(e.target.value)) {
                let newArr = Array.from(charArr);
                newArr.splice(newArr.indexOf(e.target.value), 1);
                setCharArr(newArr);
        console.log('else:',charArr)
                
            } else {
                setCharArr([...charArr, e.target.value])
            }
        }
        console.log('before set:',charArr)
        props.setLocalCharSpec(charArr)
    }
    
    return (
        <div>
            <button onClick={(e) => console.log(charArr)}></button>
            <FormGroup aria-label="position" name="position"  row>
                <Grid item xs sm={12}>
                    <FormControlLabel
                        value={universal}
                        control={<Checkbox color="primary" />}
                        label='Universal'
                        labelPlacement='start'
                        onClick={(e) => handleClick(e)}
                        checked={universal}
                        name="universal"
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
                                            onClick={(e) => handleClick(e)}
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
                                            onClick={(e) => handleClick(e)}
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
                                            onClick={(e) => handleClick(e)}
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
                                            onClick={(e) => handleClick(e)}
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
                                            onClick={(e) => handleClick(e)}
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