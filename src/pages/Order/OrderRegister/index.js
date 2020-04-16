import React, { useState, useEffect } from 'react';

import { IoIosArrowBack, IoIosCheckmark } from 'react-icons/io';
import { Form, Select } from '@rocketseat/unform';


import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { Container, Input } from './styles';

export default function OrderRegister() {
  const [orders, setOrders] = useState([]);
  const [deliverys, setDeliverys] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [query, setQuery] = useState('');


  const getSelectData = (orders) => {
    const deliverys = orders.map((order) => ({
      id: order.deliverys.id,
      title: order.deliverys.name,
    }));

    const recipients = orders.map((order) => ({
      id: order.recipients.id,
      title: `${order.recipients.city}-${order.recipients.street}-${order.recipients.number}`,
    }));

    return [deliverys, recipients];
  };

  useEffect(() => {
    async function loadItems() {
      const response = await api.get('orders');
      const orders = response.data.rows.map((value) => ({ ...value }));

      setOrders(orders);
      const [deliverysData, recipientsData] = getSelectData(orders);

      setDeliverys(deliverysData);
      setRecipients(recipientsData);
    }

    loadItems();
  }, [ query ]);

  async function handleAddOrder(event) {
    if(event.recipient_id == null || event.recipient_id === '') {
      toast.error('Necessário o preenchimento do campo de destinátario');
    }
    else if (event.deliveryman_id == null || event.deliveryman_id === '') {
      toast.error('Necessário o preenchimento do campo de entregadores');
    }
    else if (event.product_name === '' || event.product_name == null) {
      toast.error('Necessário o preenchimento do nome do produto');
    }

    try {
      await api.post('/orders', {
        recipient_id: event.recipient_id,
        deliveryman_id: event.deliveryman_id,
        product: event.product_name,
      });
    } catch(err) {
      toast.error(err.response.data.error);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleAddOrder}>

        <div className="custom-div">
          <h3> Cadastro encomendas </h3>
          <Link to="/orders" className="back-page-button">
            <IoIosArrowBack />
            Voltar
          </Link>
          <button className="save-order-button" type="submit">
            <IoIosCheckmark />
            Salvar
          </button>
        </div>

        <div className="white-box-custom">
          <div className="formatted-borders">
            <div className="putting-boxs-together">
              <div className="align-boxs">
                <h4>Destinatário</h4>
                <Select name="recipient_id" type="select" placeholder="Selecione um Destinátario" options={recipients} />
              </div>
              <div className="align-boxs">
                <h4>Entregador</h4>
                <Select name="deliveryman_id" type="select" placeholder="Selecione um Entregador" options={deliverys} />
              </div>
            </div>
            <div className="product-name-div">
              <h4>Nome do Produto</h4>
              <Input
                placeholder="Dígite o nome do Produto"
                name="product-name"
                type="text"
              />
            </div>
          </div>
        </div>

      </Form>
    </Container>
  );
}
