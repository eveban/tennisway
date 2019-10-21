import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-grid-system';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';

import { useDispatch, useSelector } from 'react-redux';
import { getListUsuarios } from '../../store/modules/usuarios/actions'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function OrdemServicoCadastro(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [state, setState] = useState({
        encordoador: '',
        usuarios: [],
        name: '',
    });

    useEffect(async () => {
        dispatch(getListUsuarios());
    }, []);

    const handleChange = name => event => {
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    const handleClose = () => {
        props.handleClose();
    }

    return (
        <>
            <Dialog fullScreen open={props.open} onClose={handleClose} TransitionComponent={Transition}>
                <DialogTitle id="titleDialog">Cadastro de Ordem de Serviço</DialogTitle>
                <DialogContent>
                    <Row>
                        <Col sm={5}>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-native-helper">Encordoador</InputLabel>
                                <NativeSelect
                                    value={state.encordoador}
                                    onChange={handleChange('encordoador')}
                                    inputProps={{
                                        name: 'encordoador',
                                        id: 'age-native-helper',
                                    }}>
                                    {
                                        state.usuarios ? state.usuarios.map(user =>
                                            <option value={user.id}>{user.nome}</option>) :
                                            <option ></option>
                                    }
                                </NativeSelect>
                                <FormHelperText>Responsável pelo encordoamento</FormHelperText>
                            </FormControl>
                        </Col>
                    </Row>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color="secondary">
                        Gravar
                    </Button>
                    <Button onClick={handleClose} variant="contained" color="primary">
                        Fechar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )

}