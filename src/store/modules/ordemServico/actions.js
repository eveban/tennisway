export function listOrdemServico(payload) {
    return { type: 'LIST_ALL_ORDEM_SERVICOS', payload };
}

export function insertOrdemServico(payload) {
    return { type: 'ADD_ORDEM_SERVICO', payload };
}

export function updateOrdemServico(payload) {
    return { type: 'EDIT_ORDEM_SERVICO', payload };
}

export function deleteOrdemServico(payload) {
    return { type: 'DELETE_ORDEM_SERVICO', payload };
}