import React from 'react';

import { Container } from './styles';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';
import { IoIosArrowBack, IoIosCheckmark } from 'react-icons/io';

import { Link } from 'react-router-dom';

export default function RecipientRegister() {

  function handleAddRecipient(event) {
    if(event.name == null || event.name === '') {
      toast.error('Necessário o preenchimento do nome');
    }
    else if (event.street == null || event.street === '') {
      toast.error('Necessário o preenchimento da rua');
    }
    else if (event.city == null || event.city === '') {
      toast.error('Necessário o preenchimento da cidade');
    }
    else if (event.state == null || event.state === '') {
      toast.error('Necessário o preenchimento do estado');
    }
    else if (event.postal_code == null || event.postal_code === '') {
      toast.error('Necessário o preenchimento do CEP');
    }
    else if (event.number == null || event.number === '') {
      toast.error('Necessário o preenchimento do número');
    }

    console.log(event);
  }

    return (
      <Container>
        <Form onSubmit={handleAddRecipient}>
          <div className="align-items-div">
            <h3>Cadastro de Destinatário</h3>
            <Link to="/recipients" className="back-page-button">
              <IoIosArrowBack />
              Voltar
            </Link>
            <button className="save-recipient-button" type="submit" >
              <IoIosCheckmark />
              Salvar
            </button>
          </div>
          <div className="white-box-custom">
            <div className="formatted-borders">
              <div className="div-name">
                <h4>Nome</h4>
                <Input className="name-input"
                       type="text"
                       name="name"
                       />
              </div>

              <div className="adress-one">
                <div className="street-div">
                  <h4>Rua</h4>
                  <Input className="street-input"
                         type="text"
                         name="street"
                         />
                </div>
                <div className="number-div">
                <h4>Número</h4>
                  <Input className="number-input"
                         type="number"
                         name="number"
                         />
                </div>
                <div className="complement-div">
                <h4>Complemento</h4>
                  <Input className="complement-input"
                         type="text"
                         name="complement"
                         placeholder=" Opcional"
                         />
                </div>
              </div>
              <div className="adress-two">
                <div className="city-div">
                  <h4>Cidade</h4>
                  <Input className="city-input"
                         type="text"
                         name="city"
                         />
                </div>
                <div className="country-div">
                  <h4>Estado</h4>
                  <Input className="country-input"
                         type="text"
                         name="state"
                         />
                </div>
                <div className="postal-code-div">
                  <h4>CEP</h4>
                  <Input className="postal-code-input"
                         type="number"
                         name="postal-code"
                         />
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Container>
    );

}
