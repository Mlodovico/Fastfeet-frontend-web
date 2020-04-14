import React from 'react';

import { Container } from './styles';
import { IoIosArrowBack, IoIosCheckmark } from 'react-icons/io';

import { Link } from 'react-router-dom';

export default function RecipientRegister() {
function handleAddRecipient() {

}

    return (
      <Container>
        <div className="align-items-div">
          <h3>Cadastro de Destinatário</h3>
          <Link to="/recipients" className="back-page-button">
            <IoIosArrowBack />
            Voltar
          </Link>
          <button className="save-recipient-button" onClick={handleAddRecipient} >
            <IoIosCheckmark />
            Salvar
          </button>
        </div>
        <div className="custom-div">
          <div className="custom-div-template">
            <div className="div-custom-name">
              <h5>Nome</h5>
              <input name="recipient-name"
                      type="name"
                      placeholder="Dígite seu nome"
              />
            </div>

            <div className="custom-div-adress">
              <h5>Rua</h5>
              <input name="recipient-street"
                     type="street"
                     placeholder="Endereço da entrega"
              />

              <h5>Número</h5>
              <input name="recipient-number"
                     type="number"
              />

              <h5>Complemento</h5>
              <input name="recipient-complement"
                     type="complement"
              />

              <h5>Cidade</h5>
              <input name="recipient-city"
                     type="city"
              />


              <h5>Estado</h5>
              <input name="recipient-country"
                     type="contry"
              />


              <h5>CEP</h5>
              <input name="recipient-code-adress"
                     type="code-adress"
              />
            </div>
          </div>

        </div>
      </Container>
    );

}
