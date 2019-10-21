import { List } from 'immutable';
import * as actions from './actionType';

export default function Clientes(state = new List(), action) {
    switch (action.type) {
        case actions.LIST_ALL_CLIENTES:
            return new List(action.cliente);

        case actions.ADD_CLIENTE:
            const clienteNew = Object.assign({}, action.cliente);
            return state.concat(clienteNew);

        case actions.EDIT_CLIENTE:
            const clienteUpdate = Object.assign({}, action.cliente);
            const indice = state.findIndex(cliente => cliente.id === action.id);
            return state.set(indice, clienteUpdate);

        case actions.DELETE_CLIENTE:
            return state.filter(cliente => cliente.id !== action.id)

        default:
            return state;
    }
}
