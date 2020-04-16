import React from 'react';

import { Container } from './styles';
import { Form, Input } from '@rocketseat/unform';
import { IoIosArrowBack, IoIosCheckmark } from 'react-icons/io';

import { Link } from 'react-router-dom';

export default function DeliveryManRegister() {
  async function handleAddDeliveryman(event) {
    console.log(event);
  };

  return (
      <Container>
        <Form onSubmit={handleAddDeliveryman}>

          <div className="custom-div">
            <h3> Cadastro de Entregadores </h3>
            <Link to="/deliverymans" className="back-page-button">
              <IoIosArrowBack />
              Voltar
            </Link>
            <button className="save-deliveryman-button" type="submit">
              <IoIosCheckmark />
              Salvar
            </button>
          </div>
          <div className="white-box-custom">
            <div className="formatted-borders">
              <div className="avatar-img-div">

                <Input type="files"
                       name="avatar_file"
                       className="input-avatar-file"
                       placeholder="adicionar avatar"
                />
              </div>
              <div className="name-email-custom-div">
                <h4>Nome</h4>
                <Input type="text"
                       name="name"
                       className="input-name-file"
                />
                <h4>Email</h4>
                <Input type="text"
                       name="email"
                       className="input-email-file"
                />
              </div>
            </div>
          </div>


        </Form>
      </Container>
    );
}
