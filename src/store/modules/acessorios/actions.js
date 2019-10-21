export function listAcessorio(payload) {
    return { type: 'LIST_ALL_ACESSORIOS', payload };
}

export function insertAcessorio(payload) {
    return { type: 'ADD_ACESSORIO', payload };
}

export function updateAcessorio(payload) {
    return { type: 'EDIT_ACESSORIO', payload };
}

export function deleteAcessorio(payload) {
    return { type: 'DELETE_ACESSORIO', payload };
}