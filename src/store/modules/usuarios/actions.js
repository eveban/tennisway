export function getListUsuarios(payload) {   
    return { type: 'LIST_ALL_USUARIOS_SAGA', payload };
}

export function getListAll(payload) {   
    return { type: 'LIST_ALL_USUARIOS', payload };
}

export function insertUsuario(payload) {
    return { type: 'ADD_USUARIO', payload };
}

export function updateUsuario(payload) {
    return { type: 'EDIT_USUARIO', payload };
}

export function deleteUsuario(payload) {
    return { type: 'DELETE_USUARIO', payload };
}

