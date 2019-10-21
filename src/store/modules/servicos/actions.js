export function listServico(payload) {
    return { type: 'LIST_ALL_SERVICOS', payload };
}

export function insertServico(payload) {
    return { type: 'ADD_SERVICO', payload };
}

export function updateServico(payload) {
    return { type: 'EDIT_SERVICO', payload };
}

export function deleteServico(payload) {
    return { type: 'DELETE_SERVICO', payload };
}