import { List } from 'immutable';
import * as actions from './actionType';

export default function OrdemServico(state = new List(), action) {
    switch (action.type) {
        case actions.LIST_ALL_ORDEM_SERVICOS:
            return new List(action.ordemServico);

        case actions.ADD_ORDEM_SERVICO:
            const ordemNew = Object.assign({}, action.ordemServico);
            return state.concat(ordemNew);

        case actions.EDIT_ORDEM_SERVICO:
            const ordemUpdate = Object.assign({}, action.ordemServico);
            const indice = state.findIndex(ordemServico => ordemServico.id === action.id);
            return state.set(indice, ordemUpdate);

        case actions.DELETE_ORDEM_SERVICO:
            return state.filter(ordemServico => ordemServico.id !== action.id)
        default:
            return state;
    }
}