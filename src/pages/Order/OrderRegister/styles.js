import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  padding: 0 150px;
  margin-top: 50px;
  font-family: 'Roboto', sans-serif;

  h3 {
    width: 30%;
  }

  .custom-div {
    width: 100%;
    align-items: center;
  }

  .back-page-button {

    margin-right: 20px;
    align-items: center;
    border: none;
    border-radius: 5px;
    padding: 10px 35px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 18px;
    background: #808080;
    color: #fff;
    transition: background 0.5s;

    &:hover {
      background: ${darken(0.10, '#808080')}
    }

    svg {
      margin-right: 8px;
      color: #fff;
    }

  }

  .save-order-button {
    display: column;
    border: none;
    justify-content: baseline;
    border-radius: 5px;
    padding: 10px 35px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 18px;
    background: #7159c1;
    color: #fff;
    transition: background 0.5s;

    &:hover {
      background: ${darken(0.10, '#7159c1')}
    }

    svg {
      margin-right: 5px;
      font-size: 30px;
      align-items: baseline;
    }
  }

  .wrapper {
    background: #FFF;
    width: 90%;
    margin: 0 left;
    height: 250px;
    width: 100%;
    margin-top: 30px;
    border-radius: 8px;
    display: block;

  }

  .box-order-register {

    display: flex;
    margin-bottom: 30px;
    margin-top: 10px;
    width: 100%;

  }

  .custom-order-box-select h5 {
    margin-top: 10px;
  }

  .custom-order-box-select select {
    border: none;
    margin-left: 10px;
    border-radius: 5px;
    background: #D3D3D3;
    color: #808080;
    width: 90%;
    padding: 0 30px;
    height: 36px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 15px;
  }

  h5 {
    margin-left: 10px;
  }

`;

export const Imput = styled.input`
    justify-content: baseline;
    margin-left: 10px;
    height: 36px;
    background: #D3D3D3;
    color: #808080;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: bold;
    width: 60%;
    border-radius: 5px;
    margin-top: 10px;
    border: none;
`;
