import React, { useEffect, useState } from 'react';

import Actions from '~/components/Actions/RecipientActions';

import api from '~/services/api';

import { Container } from './styles';

export default function ProblemDashboard() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [reg, setReg] = useState(null);

  /**
   * useEffect(() => {
   * setLoading(true);
   *
   * async function loadProblems() {
   *   const response = await api.get('problems', {
   *     params: { query }
   *    });
   *    console.log(response);
   *   }
   *
   *   loadProblems();
   * }, { query })

   */

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
