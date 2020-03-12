import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/gobarber-logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="Go Barber" />
      <form>
        <input placeholder="Nome Completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
