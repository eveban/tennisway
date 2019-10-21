import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../services/api';
import { toast } from 'react-toastify';
import { getListAll} from './actions';

export function* findAll() {
    try {
        const response = yield call(api.get, 'usuario', {});

        yield put(getListAll(response.data));
        
    } catch (err) {
        toast.error('Falha na busca dos Usuários cadastrados');
    }
}

export default all([
    takeLatest('LIST_ALL_USUARIOS_SAGA', findAll),
]);