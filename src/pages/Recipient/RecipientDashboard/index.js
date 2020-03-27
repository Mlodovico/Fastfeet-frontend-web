import React from 'react';
import { Link } from 'react-router-dom';

import Actions from '~/components/Actions/RecipientActions';

import { Container,
         Input,
        } from './styles';

export default function RecipientDashboard() {
    return <Container>
      <div className="recipient-content">
        <h3> Gerenciando Destinatários </h3>
        <div className="functional-row">
          <Input name="search" type="search" placeholder="Buscar por destinatário" />
          <Link to="/registerRecipient">+ CADASTRAR</Link>
        </ div>

        <table cellspacing="0" cellpadding="0">
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
          <tr className="recipient-table-content">
            <td>01</td>
            <td>Aldalberto Honorato</td>
            <td>Av Norte Sul</td>
            <Actions />
          </tr>
        </table>
      </div>
    </Container>;

}
