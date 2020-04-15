import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  padding: 0 150px;
  margin-top: 50px;
  font-family: 'Roboto', sans-serif;

  h3 {
    width: 80%;
  }

  .custom-div {
    width: 100%;
    display: flex;
    margin-bottom: 30px;
  }

  .back-page-button {
    background: red;
    color: #fff;
    align-items: center;
    width: 120px;
    height: 35px;
    border-radius: 5px;
    margin-right: 10px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 16px;
    transition: background 0.5s;

    &:hover {
      background: ${darken(0.10, 'red')}
    }

    svg {
      margin-right: 8px;
      color: #fff;
    }

  }

  .save-order-button {
    background: #7159c1;
    color: #fff;
    border: none;
    border-radius: 5px;
    width: 120px;
    height: 35px;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 16px;
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

  .white-box-custom {
    background: #fff;
    height: 400px;
    width: 100%;
    display: flex;

    .formatted-borders {
      background: #fff;
      width: 80%;
      height: 370px;
      margin-left: 30px;
      margin-right: 30px;
      margin-top: 10px;
      justify-content: space-between;

      .putting-boxs-together{
        margin-top:50px;
        display:flex;
        justify-content: space-between;

        .align-boxs{
          display: block;
          justify-content: space-between;
          width: 100%;

          select{
            width: 90%;
            height: 35px;
            border: none;
          }
        }
      }

      .product-name-div {
        h4 {
          margin-top: 100px;
          margin-bottom: 20px;
        }
      }
    }
  }
`;

export const Imput = styled.input`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  width: 80%;
  height:35px;
  background: #D3D3D3;
  border-style: groove;
  border: none;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 15px;
`;
