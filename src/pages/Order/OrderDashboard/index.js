import React from 'react';
import Icon from 'react-web-vector-icons';

import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/fastfeet-logo@2x.png'

export default function OrderDashboard() {
    return (
      <>
        <Form class="fasfeet-bar-navigation">
          <img src={logo} />
          <strong> | </strong>

          <button class="orderDashboard">Encomendas</button>
          <button class="deliveruDashboard">Entregadores</button>
          <button class="recipientDashboard">Destinátario</button>
          <button class="problemDashboard">Problemas</button>
        </Form>

        <div>
          <h3>
            Gerenciamento de Encomendas
          </h3>

          <Input
            name="search"
            type="search"
            placeholder="Buscar por Encomendas"
          />

        </div>

      </>
    );

}
