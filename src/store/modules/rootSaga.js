import { all } from 'redux-saga/effects';

import usuario from './usuarios/sagas';
import ordemServico from './ordemServico/sagas';
import auth from './auth/sagas';

export default function* rootSaga() {
    return yield all([auth, usuario, ordemServico]);
}