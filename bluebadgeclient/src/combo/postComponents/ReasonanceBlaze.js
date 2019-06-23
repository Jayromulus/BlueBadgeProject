import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const ReasonanceBlaze = (props) => {
    return (
        <div>
            <FormControl component="fieldset">
                <RadioGroup aria-label="position" name="position" onChange={(e) => props.setLocalRB(!props.localRB)} row>
                    <FormControlLabel
                        value="trueRB"
                        control={<Radio color="primary" />}
                        label="Reasonance Blaze"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="falseFB"
                        control={<Radio color="primary" />}
                        label="Non-Reasonance Blaze"
                        labelPlacement="start"
                    />
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default ReasonanceBlaze