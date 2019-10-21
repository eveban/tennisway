import { combineReducers } from 'redux';

import Acessorio from './acessorios/reducer';
import Cliente from './clientes/reducer';
import OrdemServico from './ordemServico/reducer';
import Servico from './servicos/reducer';
import Usuario from './usuarios/reducer';
import auth from './auth/reducer';

export default combineReducers({
    Acessorio,
    auth,
    Cliente,
    OrdemServico,
    Servico,
    Usuario,
});