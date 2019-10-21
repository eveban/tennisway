//import produce from 'immer';
import * as actions from './actionType';
import { List } from 'immutable';

export default function usuario(state = new List(), action) {
    switch (action.type) {
        case actions.LIST_ALL_USUARIOS:
            return new List(action.payload);

        case actions.ADD_USUARIO:
            const usuarioNew = Object.assign({}, action.payload);
            return state.concat(usuarioNew);

        case actions.EDIT_USUARIO:
            const usuarioUpdate = Object.assign({}, action.payload);
            const indice = state.findIndex(usuario => usuario.id === action.usuario.id);
            return state.set(indice, usuarioUpdate);

        case actions.DELETE_USUARIO:
            return state.filter(usuario => usuario.id !== action.usuario.id)
    }
    return state;
}


/*
const INITIAL_STATE = {
    Usuarios: [],
};


export default function user(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case actions.LIST_ALL_USUARIOS: {
                draft.usuarios = action.payload;
                break;
            }
            case actions.ADD_USUARIO: {
                draft.usuarios = action.payload;
                break;
            }
            case actions.EDIT_USUARIO: {
                draft.usuarios = action.payload;
                break;
            }
            default:
        }
    });
}
*/



