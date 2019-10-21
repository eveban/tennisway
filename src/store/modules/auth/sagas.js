import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../services/api';
import history from "../../../services/history";
import { toast } from 'react-toastify';
import { loginSuccess, loginFailure } from './actions';

export function* validaLogin({ payload }) {
    try {
        const { email, password } = payload;

        const response = yield call(api.post, 'token', { email, password });

        const { token, user } = response.data;

        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(loginSuccess(token, user));

        history.push('/ordemServico');

    } catch (err) {
        toast.error('Falha na autenticação, verifique seus dados');
        yield put(loginFailure());
    }
}

export function efetuaLogout() {
    localStorage.removeItem('tennisway');
    history.push('/');
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('LOGIN_USUARIO', validaLogin),
    takeLatest('LOGOUT_USUARIO', efetuaLogout),
]);