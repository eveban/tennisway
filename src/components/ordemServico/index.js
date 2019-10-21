import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import api from '../../services/api';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import ContentAdd from '@material-ui/icons/Add';
import OsCadastro from './ordemServicoCadastro';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4, 9),
        width: '90%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    title: {
        flexGrow: 1,
    },
    fab: {
        margin: 0,
        top: 'auto',
        right: 40,
        bottom: 40,
        left: 'auto',
        position: 'fixed',
    },

}));

export default function OrdemServico() {
    const classes = useStyles();
    const [listOS, setListOS] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const response = await api.get('os');
            const data = response.data;
            setListOS(data);
        }
        fetchData();
    }, [])
    
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Paper className={classes.root}>
                <Tooltip id="tooltip-icon" title="Incluir Ordem de Serviço">
                    <Fab className={classes.fab} color="primary" size="small" aria-label="add" onClick={handleOpen} >
                        <ContentAdd />
                    </Fab>
                </Tooltip>
                <Typography variant="h5" className={classes.title}>
                    Ordem de Serviço
                    </Typography>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell align="right">Data</TableCell>
                            <TableCell align="right">Cliente</TableCell>
                            <TableCell align="right">Raquete</TableCell>
                            <TableCell align="right">Data Entrega</TableCell>
                            <TableCell align="right">Hora Entrega</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listOS.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.id}</TableCell>
                                <TableCell align="right">{row.data}</TableCell>
                                <TableCell align="right">{row.Cliente.nome}</TableCell>
                                <TableCell align="right">{row.RaqueteCliente.nome}</TableCell>
                                <TableCell align="right">{row.dataEntrega}</TableCell>
                                <TableCell align="right">{row.horaEntrega}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
            <OsCadastro open={open} handleClose={handleClose}/>
        </>
    );

}