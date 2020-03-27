import React from 'react';
import { Link } from 'react-router-dom';

import Actions from '~/components/Actions';

import { Container,
         Input,
        } from './styles';

export default function DeliveryManDashboard() {
    return <Container>
      <div className="delivery-man-content">
        <h3> Gerenciando entregadores </h3>
        <div className="functional-row">
          <Input name="search" type="search" placeholder="Buscar por entregador" />
          <Link to="/registerDeliveryMan">+ CADASTRAR</Link>
        </ div>

        <table cellspacing="0" cellpadding="0">
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
          <tr className="delivery-man-table-content">
            <td>01</td>
            <td>
              <div>
                <img src={"https://api.adorable.io/avatars/57/abott@adorable.png"} alt="Avatar Entregador" />
              </div>
            </td>
            <td>Aldalberto Honorato</td>
            <td>adalberto.hono@gmail.com</td>
            <Actions />
          </tr>
        </table>
      </div>
    </Container>;

}
