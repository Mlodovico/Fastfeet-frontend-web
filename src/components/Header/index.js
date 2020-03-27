import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';
import { Container, Content, Profile } from './styles';
import logo from '~/assets/fastfeet-logo@2x.png';

export default function Header() {
  const dispatch = useDispatch();


  function handleSignOut() {
    dispatch(signOut())
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Fast Feet logo" />

          <Link to="/orders">ENCOMENDAS</Link>
          <Link to="/deliverymans">ENTREGADORES</Link>
          <Link to="/recipients">DESTINATÁRIOS</Link>
          <Link to="/problems">PROBLEMAS</Link>

        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Murilo Lodovico</strong>
              <button type="button"
                      onClick={handleSignOut}>
                sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
