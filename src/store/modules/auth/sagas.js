import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';
import { signInSuccess } from './actions'

export function* signIn({ payload }) {
  const { email, password_hash } = payload;

  const response = yield call(api.post, 'sessions', {
    email,
    password_hash,
  });

  const { token, user } = response.data;

  console.tron.log(user);

  if(!user.administrator) {
    console.tron.error('Usuário não tem permissão o suficiente');
    return;
  }

  console.tron.log("Chegou até aqui!")

  yield put(signInSuccess(token,user));

  history.push('orders');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn)
]);
