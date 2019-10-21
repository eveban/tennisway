
import { List } from 'immutable';
import * as actions from './actionType';

export default function Servicos(state = new List(), action) {
    switch (action.type) {
        case actions.LIST_ALL_SERVICOS:
            return new List(action.servico);

        case actions.ADD_SERVICO:
            const servicoNew = Object.assign({}, action.servico);
            return state.concat(servicoNew);

        case actions.EDIT_SERVICO:
            const servicoUpdate = Object.assign({}, action.servico);
            const indice = state.findIndex(servico => servico.id === action.id);
            return state.set(indice, servicoUpdate);

        case actions.DELETE_SERVICO:
            return state.filter(servico => servico.id !== action.id)
        default:
            return state;
    }
}