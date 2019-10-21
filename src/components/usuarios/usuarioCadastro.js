import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import * as UsuarioAction from '../../store/modules/usuarios/actions';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
    root: {
        padding: theme.spacing(3, 2),
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function UsuarioCadastro(props) {
    const classes = useStyles();

    const initialState = {
        id: 0,
        nome: '',
        email: '',
        senha: '',
        adm: true,
        ativo: false,
    }

    const [values, setValues] = useState(initialState);

    const clearState = () => {
        setValues({ ...initialState });
    };

    useEffect(() => {
        clearState()
    }, [props.open])

    const handleChange = e => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleChecked = e => {
        setValues({ ...values, [e.target.name]: e.target.checked });
    };

    async function save(){
        let usuario = {};
        usuario['id'] = values.id;
        usuario['nome'] = values.nome;
        usuario['email'] = values.email;
        usuario['senha'] = values.senha;
        usuario['ativo'] = Number(values.ativo);
        usuario['administrador'] = Number(values.adm);

        if (values.id == 0) {
            let user = await UsuarioAction.insertUsuario(usuario, {});
            if (user != null) {
                console.log('Inserido com sucesso');
            } else {
                console.log('Erro na inclusão do usuário');
            }
        }
        handleClose();
    };

    const handleClose = e => {
        props.setOpen(false);
    };

    return (
        <Container fluid style={{ lineHeight: '10px' }}>
            <Dialog open={props.open} onClose={handleClose} fullWidth maxWidth={'md'}>
                <DialogTitle id="dialogAgendaCadastro">Cadastro de Usuários</DialogTitle>
                <DialogContent>
                    <Paper className={classes.root}>
                        <DialogContentText>
                            <Row>
                                <Col sm={2}>
                                    <TextField label='Id' name="id" value={values.id} disabled={true} />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={10}>
                                    <TextField label='Nome' name="nome" value={values.nome} onChange={handleChange} fullWidth
                                        autoFocus />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={10}>
                                    <TextField label='email' name="email" value={values.email} onChange={handleChange} fullWidth />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <TextField label='Senha' name="senha" type="password" value={values.senha} onChange={handleChange} fullWidth />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={3}>
                                    <FormGroup row>
                                        <FormControlLabel
                                            control={
                                                <Checkbox name="ativo" checked={values.ativo} onChange={handleChecked} color="primary" />
                                            }
                                            label="Ativo"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm={3}>
                                    <FormGroup row>
                                        <FormControlLabel
                                            control={
                                                <Checkbox name="adm" checked={values.adm} onChange={handleChecked} color="primary" />
                                            }
                                            label="Administrador"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </DialogContentText>
                    </Paper>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={save}>Gravar</Button>
                    <Button variant="contained" color="secondary" onClick={handleClose}>Fechar</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );


}