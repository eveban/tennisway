import { List } from 'immutable';
import * as actions from './actionType';

export default function Acessorios(state = new List(), action) {
    switch (action.type) {
        case actions.LIST_ALL_ACESSORIOS:
            return new List(action.acessorio);

        case actions.ADD_ACESSORIO:
            const acessorioNew = Object.assign({}, action.acessorio);
            return state.concat(acessorioNew);

        case actions.EDIT_ACESSORIO:
            const acessorioUpdate = Object.assign({}, action.acessorio);
            const indice = state.findIndex(acessorio => acessorio.id === action.id);
            return state.set(indice, acessorioUpdate);

        case actions.DELETE_ACESSORIO:
            return state.filter(acessorio => acessorio.id !== action.id)
        default:
            return state;
    }
}