import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/fastfeet-logo@2x.png'

const schema = Yup.object().shape({
  email: Yup.string()
            .email("Insira um email válido")
            .required("Necessário preenchimento de email"),
  password: Yup.string()
                .min(8, "Mínimo de 8 caracteres")
                .max(10, "Máximo de 20 caracteres")
                .required("Necessário o preenchimento de senha")
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Fast Feet"  />

      <Form schema={schema} onSubmit={handleSubmit}>
        <h4>SEU EMAIL</h4>
        <Input name="email" type="email" placeholder="exemplo@gmail.com" />
        <h4>SUA SENHA</h4>
        <Input name="password" type="password" placeholder="Digite sua senha" />

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );

}
