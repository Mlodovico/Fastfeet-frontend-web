export function signInRequest(email, password_hash) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password_hash }
  }
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user }
  }
}

export function signInFailed() {
  return {
    type: '@auth/SIGN_IN_FAILURE',

  }
}
