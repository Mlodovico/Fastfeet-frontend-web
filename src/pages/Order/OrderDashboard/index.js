import React from 'react';
import { Link } from 'react-router-dom';

import Actions from '~/components/Actions';

import { Container,
         Input,
         Status,
        } from './styles';

export default function OrderDashboard() {
    return <Container>
      <div className="orders-content">
        <h3> Gerenciando encomendas </h3>
        <div className="functional-row">
          <Input name="search" type="search" placeholder="Buscar por Encomenda" />
          <Link to="/orderRegister">+ CADASTRAR</Link>
        </ div>

        <table cellspacing="0" cellpadding="0">
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
          <tr className="orders-table-content">
            <td>01</td>
            <td>Murilo Lodovico</td>
            <td>
              <div>
                <img src={"https://api.adorable.io/avatars/57/abott@adorable.png"} alt="Avatar Entregador" />
                <span>Andressa</span>
              </div>
            </td>
            <td>Campinas</td>
            <td>São Paulo</td>
            <td>
              <Status>ENTREGUE</Status>
            </td>
            <Actions> ... </Actions>
          </tr>
        </table>
      </div>
    </Container>;

}
