export function listCliente(payload) {
    return { type: 'LIST_ALL_CLIENTES', payload };
}

export function insertCliente(payload) {
    return { type: 'ADD_CLIENTE', payload };
}

export function updateCliente(payload) {
    return { type: 'EDIT_CLIENTE', payload };
}

export function deleteCliente(payload) {
    return { type: 'DELETE_CLIENTE', payload };
}