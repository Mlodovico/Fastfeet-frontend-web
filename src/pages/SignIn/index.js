import React from 'react';

import logo from '~/assets/fastfeet-logo@2x.png'
// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Fast Feet"  />

      <form>
        <h4>SEU EMAIL</h4>
        <input type="email" placeholder="exemplo@gmail.com" />
        <h4>SUA SENHA</h4>
        <input type="password" placeholder="Digite sua senha" />

        <button type="submit">Entrar no sistema</button>
      </form>
    </>
  );

}
