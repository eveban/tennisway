export function loginUsuario(email, password) {
    return { type: 'LOGIN_USUARIO', payload: { email, password } };
}

export function loginSuccess(token, user) {
    return { type: 'LOGIN_SUCCESS', payload: { token, user }, };
}

export function loginFailure() {
    return { type: 'LOGIN_FAILURE' };
}

export function logoutUsuario() {
    return { type: 'LOGOUT_USUARIO' };
}