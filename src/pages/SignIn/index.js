import React from 'react';
import { useDispatch} from 'react-redux'

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/fastfeet-logo@2x.png'

import { signInRequest} from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
            .email("Insira um email válido")
            .required("Necessário preenchimento de email"),
  password: Yup.string()
                .min(6, "Mínimo de 8 caracteres")
                .max(10, "Máximo de 20 caracteres")
                .required("Necessário o preenchimento de senha")
});

export default function SignIn() {
  const dispatch = useDispatch()

  function handleSubmit({ email, password_hash}) {
    dispatch(signInRequest(email, password_hash));
  }

  return (
    <>
      <img src={logo} alt="Fast Feet"  />

      <Form schema={schema} onSubmit={handleSubmit}>
        <h4>SEU EMAIL</h4>
        <Input name="email" type="email" placeholder="exemplo@gmail.com" />
        <h4>SUA SENHA</h4>
        <Input name="password" type="password" placeholder="**********" />

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );

}
