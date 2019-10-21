import React, { useState } from 'react';
import logo from '../../logotipo/logo.jpeg';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import UsuarioCadastro from '../usuarios/usuarioCadastro';
import { Row, Col } from 'react-grid-system';
import { useDispatch } from 'react-redux';
import { loginUsuario } from '../../store/modules/auth/actions'
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function Login() {

    const classes = useStyles();

    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleChange = e => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleValidateLogin = () => {
        dispatch(loginUsuario(values.email, values.password));
    }


    return (
        <>
            <Paper className={classes.root} elevation={10} >
                <div style={{ 'textAlign': 'center' }}>
                    <img src={logo} alt="" style={{ width: 400 }} />
                </div>
                <div style={{ 'textAlign': 'center' }}>
                    <Typography variant="h4" component="h2" color="primary">
                        Controle de Acesso
                </Typography>
                </div>
                <div>
                    <TextField
                        id="outlined-email-input"
                        label="Login"
                        className={classes.textField}
                        name="email"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        value={values.email}
                        onChange={handleChange}
                        autoFocus
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-password-input"
                        label="Senha"
                        className={classes.textField}
                        type="password"
                        margin="normal"
                        variant="outlined"
                        name="password"
                        fullWidth
                        value={values.password}
                        onChange={handleChange}
                    />
                </div>
                <Row>
                    <Col sm={5}>
                        <Button variant="contained" color="primary" className={classes.button} onClick={handleValidateLogin}
                            endIcon={<Icon>send</Icon>}>
                            Acessar
                    </Button>
                    </Col>

                    <Col sm={5}>
                        <Button variant="contained" color="primary" className={classes.button} onClick={handleClickOpen}
                            endIcon={<Icon>add</Icon>}>
                            Usuário
                    </Button>
                    </Col>
                </Row>
                <UsuarioCadastro open={open} setOpen={setOpen} />
            </Paper>
        </>
    )
}