import React from 'react';

import Actions from '~/components/Actions/RecipientActions';

import { Container } from './styles';

export default function ProblemDashboard() {
    return <Container>
      <div className="problem-content">
        <h3> Gerenciando Destinatários </h3>

        <table cellspacing="0" cellpadding="0">
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Ações</th>
            </tr>
          <tr className="problem-table-content">
            <td>01</td>
            <td>Entregador sofreu acidente</td>
            <Actions />
          </tr>
        </table>
      </div>
    </Container>;

}
