import React, { useState, useEffect } from 'react';

import { IoIosArrowBack, IoIosCheckmark } from 'react-icons/io';
import { Container, Imput } from './styles';
import { Form } from '@rocketseat/unform';

import api from '~/services/api';

import { Link } from 'react-router-dom';
import * as Yup from 'yup';


const schema = Yup.object().shape({
  recipient_id: Yup.array().required("Cadastro precisa receber um destinatário"),
  deliveryman_id: Yup.array().required("Cadastro precisa receber um entregador"),
  product_name: Yup.string().required("Cadastro precisa do nome do produto"),
  date: Yup.date().required(),
});


export default function OrderRegister() {
  const [ orders, setOrders] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function loadItems() {
      const response = await api.post('orders', {
        params: { query },
      });

      const data = response.data.map(value => {
        return {...value};
      });

      setOrders(data);

    }

    loadItems()
  }, { query });

  /**
   * Precisa finalizar o proceso de cadastramento de
   * nova encomenda
   */

  function handleAddOrder() {

  }


  return (
    <Container>
      <Form schema={schema}>

        <div className="custom-div">
          <h3> Cadastro encomendas </h3>
          <Link to="/orders" className="back-page-button">
            <IoIosArrowBack />
            Voltar
          </Link>
          <button className="save-order-button" onClick={handleAddOrder} >
            <IoIosCheckmark />
            Salvar
          </button>
        </div>

        <div className="white-box-custom">
          <div className="formatted-borders">
            <div className="putting-boxs-together">
              <div className="align-boxs">
                <h4>Destinatário</h4>
                <select>
                  {orders.map(order => (
                    <option>
                      {order.recipients.city},
                      {order.recipients.street},
                      {order.recipients.number}
                    </option>
                  ))}
                </select>
              </div>
              <div className="align-boxs">

                <h4>Entregador</h4>
                <select>
                  {orders.map(order => (
                    <option>
                      {order.deliverys.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="product-name-div">
              <h4>Nome do Produto</h4>
              <Imput
                    placeholder="Dígite o nome do Produto"
                    name="product-name"
                    type="name"
                    />
            </div>
          </div>
        </div>

        </Form>
      </Container>
    );

}
