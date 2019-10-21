import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Servico() {
    return (
        <div>
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
                    }
                    label="Secondary"
                />
            </FormGroup>
        </div>
    )
}