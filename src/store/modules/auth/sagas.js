import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';
import { signInSuccess, signInFailed } from './actions'

export function* signIn({ payload }) {
  try {
    const { email, password_hash } = payload;

  const response = yield call(api.post, 'sessions', {
    email,
    password_hash,
  });

  const { token, user } = response.data;

  console.tron.log(user);

  if(!user.administrator) {
    toast.error('Usuário não tem permissão o suficiente');
    return;
  }

  api.defaults.headers.Authorization = `Bearer ${token}`;

  yield put(signInSuccess(token,user));

  history.push('orders');
  }catch (err) {
    toast.error('Falha na autenticação, verifique seus dados')
    yield put(signInFailed());

  }
}

export function setToken({ payload }) {
  if(!payload) return;

  const { token } = payload.auth;

  if(token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('@persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),

]);
