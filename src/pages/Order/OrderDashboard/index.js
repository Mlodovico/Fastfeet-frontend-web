import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { zonedTimeToUtc } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';


import api from '~/services/api';

import Actions from '~/components/Actions';

import { Container,
         Input,
         Status,
        } from './styles';

export default function OrderDashboard() {
  const [ orders, setOrders] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const getFormatedStatus = order => {
    let status = {};
    if (order.canceled_at) {
      status = { text: 'CANCELADA', background: '#FAB0B0', color: '#DE3B3B' };
      return status;
    }
    if (order.end_date) {
      status = { text: 'ENTREGUE', background: '#DFF0DF', color: '#2CA42B' };
      return status;
    }
    if (order.start_date) {
      status = { text: 'RETIRADA', background: '#BAD2FF', color: '#4D85EE' };
      return status;
    }
    status = { text: 'PENDENTE', background: '#F0F0DF', color: '#C1BC35' };
    return status;
  };

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('orders', {
        params: { query },
      });

      const data = response.data.rows.map(value => {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return {
          ...value,
          formattedStatus: getFormatedStatus(value),
          startDateFormatted: value.start_date ? format(
            zonedTimeToUtc(query.start_date, timezone),
                "dd 'de' MMMM 'de' yyyy",
                { locale: pt }
          ) : null,
          endDateFormatted: query.end_date
            ? format(
                zonedTimeToUtc(query.end_date, timezone),
                "dd 'de' MMMM 'de' yyyy",
                { locale: pt }
              )
            : null,
            avatarUrl:
            query.delivery_id && query.delivery.avatar
              ? query.delivery.avatar.url
              : `https://avatar.oxro.io/avatar?name=`,
        };
      });

      setLoading(false);
      setOrders(data);
    }

    loadOrders();

    }, [query]);


  return (
      <Container>
        <div className="orders-content">
          <h3> Gerenciamento de encomendas </h3>
          <div className="functional-row">
            <Input name="search"
                   type="search"
                   placeholder="Buscar por Encomenda"
                   value={query}
                   onChange={exist => [setQuery(exist.target.value)]}
              />
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

            {orders.map(order => (
              <>
                <tr className="orders-table-content">
                  <td>#{order.id}</td>
                  <td>{order.recipient}</td>
                  <td>
                    <div>
                      <img src={order.deliveryman_id && order.deliveryman_id.avatar
                              ? order.deliveryman_id.avatar.url
                              : `${order.avatarUrl}Sem+Entregador`} alt="Avatar"
                      />
                      <span>{order.deliveryman_id
                      ? order.deliverys.name
                      : 'Sem entregador'}</span>
                    </div>
                  </td>
                  <td>{order.recipient_id && order.recipients.city}</td>
                  <td>{order.recipient_id && order.recipients.state}</td>
                  <td>
                    <Status status={order.formattedStatus}>
                      {order.formattedStatus.text}</Status>
                  </td>
                  <td>
                    <div className="action-div">
                      <Actions />
                    </div>
                  </td>
                </tr>
              </>
            )) }
          </table>
        </div>
      </Container>
  );

}
