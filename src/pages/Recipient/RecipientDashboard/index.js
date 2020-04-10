import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import Actions from '~/components/Actions/RecipientActions';

import api from '~/services/api'

import { Container,
         Input,
        } from './styles';
import { MdAdd } from 'react-icons/md';


export default function RecipientDashboard() {
  const [recipients, setRecipients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [reg, setReg] = useState(null);

  useEffect(() => {
    setLoading(true);

    async function loadRecipients(){

      const response = await api.get('recipients', {
        params: { query },

      });

      const data = response.data.map(value => {
        return {...value};
      });

      setLoading(false);
      setRecipients(data);
      setReg(response.data.count);
    }

    loadRecipients();
  }, [query, page, reg]);

  function handleNextPage() {
    setPage(page + 1);
  }

  function handlePrevPage() {
    setPage(page - 1);
  }



    return <Container>
      <div className="recipient-content">
        <h3> Gerenciamento de Destinatários </h3>
        <div className="functional-row">
          <Input name="search"
                 type="search"
                 placeholder="Buscar por destinatário"
                 value={query}
                 onChange={ e => [setQuery(e.target.value)] }
          />
          <Link to="/registerRecipient">
            <MdAdd />
            CADASTRAR
          </Link>
        </ div>

        <table cellspacing="0" cellpadding="0">
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>

          {reg !== 0 ? (
            ''
          ) : (
            <span className="noData">Nenhum endereço foi localizado.</span>
          )}

          {recipients.map(recipient => (
            <>
              <tr className="recipient-table-content">
                <td>#{recipient.id}</td>
                <td>{recipient.name}</td>
                <td>{recipient.street}, {recipient.number}</td>
                <div className="action-div">
                  <Actions />
                </div>
              </tr>
            </>
          ))}
        </table>
      </div>
    </Container>;

}
