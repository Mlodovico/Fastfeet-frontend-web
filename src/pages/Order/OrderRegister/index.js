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
  const [ orders, setNewOrders] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function setNewOrders() {
      const response = await api.post('orders', {
        params: { query },
      });
    }
  });

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
          <div className="wrapper">
            <div name="recipient" className="box-order-register">
              <div className="custom-order-box-select">
                <h5>Destinátario</h5>
                <select>
                  <option value="0">Destino</option>
                  <option value="1">Rua Cinira Fonseca de Oliveira</option>
                  <option value="2">Av Banderias</option>
                </select>
            </div>
            <div name="deliveryman" className="custom-order-box-select">
              <h5>Entregadores</h5>
              <select>
                <option value="0">Entregadores</option>
                <option value="1">Robson Da Silva</option>
                <option value="2">Anderson Pereira</option>
              </select>
            </div>
          </div>


          <h5>Nome do produto</h5>
          <Imput type="product-name"
                  name="product-name"
                  placeholder="   Insira o nome do produto"
          />
          </div>

        </Form>
      </Container>
    );

}
