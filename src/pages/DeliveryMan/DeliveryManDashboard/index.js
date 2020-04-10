import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import Actions from '~/components/Actions/DeliveryManActions';

import api from '~/services/api'

import { MdAdd } from 'react-icons/md';

import { Container,
         Input,
        } from './styles';

export default function DeliveryManDashboard() {
  const [deliverymans, setDeliveryman] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [reg, setReg] = useState(null);



  useEffect(() => {
    setLoading(true);

    async function loadDeliverymans() {

      const response = await api.get('deliverys', {
        params: { query, page },

      });

      const data = response.data.map(value => {
        return {
          ...value,
          avatar_id: value.avatar ? value.avatar.path :
          `https://avatar.oxro.io/avatar?name=${value.name}`,
        };
      });


      setLoading(false);
      setDeliveryman(data);
      setReg(response.data.count);
    }

    loadDeliverymans();
  }, [query, page, reg]);

  function handleNextPage() {
    setPage(page + 1);
  }

  function handlePrevPage() {
    setPage(page - 1);
  }

  return(
      <Container>
      <div className="delivery-man-content">
        <h3> Gerenciamento de entregadores </h3>
        <div className="functional-row">
          <Input name="search"
                 type="text"
                 placeholder="  Buscar por entregador"
                 value={query}
                 onChange={ e => [setQuery(e.target.value)] }
          />
          <Link to="/registerDeliveryMan">
            <MdAdd />
            CADASTRAR
          </Link>
        </ div>
       <table cellspacing="0" cellpadding="0">
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>

          {reg !== 0 ? (
            ''
          ) : (
            <span className="noData">Nenhum entregador foi localizado.</span>
          )}

          {deliverymans.map(deliveryman => (
            <>
              <tr className="delivery-man-table-content">
                <td>#{deliveryman.id}</td>
                <td>
                 <div>
                   <img src={deliveryman.avatar_id} alt="Avatar Entregador" />
                 </div>
                </td>
                <td>{deliveryman.name}</td>
                <td>{deliveryman.email}</td>
                <div className="action-div">
                  <Actions />
                </div>
              </tr>
            </>
          ))}
        </table>
        <footer className="delivery-man-footer">
        <button type="button"
                onClick={handlePrevPage}
                disabled={page===1}
        >
          Página Anterior
        </button>

        <button type="button"
                onClick={handleNextPage}
                disabled={
                  (page !== 1 && reg / 4 <= page) ||
                  (page === 1 && deliverymans.length < 4) ||
                  (query !== '' && reg === 4) || reg === 4
                }
        >
          Próxima Página
        </button>
      </footer>
      </div>
    </Container>
  );

}
