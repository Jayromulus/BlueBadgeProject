import React from 'react';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

const PostCombo = (props) => {
    return (
        <div>
            <Typography variant="h6" id="modal-title">
                Post your {props.selected} combo
                    </Typography>
            <TextField
                variant='outlined'
                label='Route'
                type='text'
                value={props.localCombo}
                onChange={(e) => props.setLocalCombo(e.target.value)}
            />
        </div>
    )
}

export default PostCombo