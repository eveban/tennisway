import produce from 'immer';
import * as actions from './actionType';

const INITIAL_STATE = {
    id: 0,
    nome: '',
    adm: '',
    token: null,
    signed: false,
    loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case actions.LOGIN_USUARIO: {
                draft.loading = true;
                break
            }

            case actions.LOGIN_SUCCESS: {
                draft.id = action.payload.user.id;
                draft.nome = action.payload.user.nome;               
                draft.token = action.payload.user.token;
                draft.adm = action.payload.user.adm;
                draft.signed = true;
                draft.loading = false;
                break;
            }

            case actions.LOGIN_FAILURE: {
                draft.loading = false;
                break;
            }

            case actions.LOGOUT_USUARIO: {
                draft.token = null;
                draft.signed = false;
                break;
            }

            default:
        }
    });
}