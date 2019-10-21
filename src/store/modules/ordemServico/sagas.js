import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../services/api';
import history from "../../../services/history";
import { toast } from 'react-toastify';
import { listOrdemServico } from './actions';

export function* findAll() {
    try {

        const response = yield call(api.get, 'os', {});

        const result = response.data;

        return result;

    } catch (err) {
        toast.error('Erro na busca da(s) Ordem de Serviço(s)');
    }
}

export default all([
    takeLatest('LIST_ALL_ORDEM_SERVICOS', findAll),
]);