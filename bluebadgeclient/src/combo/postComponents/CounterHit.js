import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const CounterHit = (props) => {
    return (
        <div>
            <FormControl component="fieldset">
                <RadioGroup aria-label="position" name="position" onChange={(e) => props.setLocalCH(!props.localCH)} row>
                    <FormControlLabel
                        value="trueCH"
                        control={<Radio color="primary" />}
                        label="Counter Hit"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="falseCH"
                        control={<Radio color="primary" />}
                        label="Non-Counter Hit"
                        labelPlacement="start"
                    />
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default CounterHit