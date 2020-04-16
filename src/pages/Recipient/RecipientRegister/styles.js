import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  padding: 0 150px;
  width: 100%;
  margin-top: 100px;
  font-family: 'Roboto', sans-serif;

  .align-items-div{
    width: 100%;
    display: flex;
    margin-bottom: 30px;

    h3 {
      width: 80%;
    }

    .back-page-button{
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
    }

    .save-recipient-button {
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

      svg {
        font-size: 25px;
        justify-content: center;
      }
    }
  }

  .white-box-custom {
    background: #fff;
    width: 100%;
    height: 400px;
    display: flex;

    .formatted-borders {
      width: 100%;
      height: 450px;
      margin-top: 30px;
      margin-left: 30px;
      margin-right: 30px;
      margin-bottom: 30px;

      .div-name {
        height: 70px;
        margin-bottom: 30px;

        h4 {
          margin-bottom: 10px;
        }

        .name-input {
          background: #D3D3D3;
          height: 40px;
          width: 90%;
          border: none;
          border-radius: 5px;
        }
      }

      .adress-one {
        display: flex;
        margin-top: 10px;
        width: 90%;
        height: 70px;

        .street-div {
          width: 50%;

          h4 {
            margin-bottom: 10px;
          }

          .street-input {
            height: 40px;
            width: 100%;
            border: none;
            border-radius: 5px;
            background: #D3D3D3;
          }
        }

        .number-div {
          margin-left: 10px;
          width: 20%;

          h4 {
            margin-bottom: 10px;
          }

          .number-input {
            height: 40px;
            width: 95%;
            border: none;
            border-radius: 5px;
            background: #D3D3D3;
          }
        }

        .complement-div {
          width: 30%;

          h4 {
            margin-bottom: 10px;
          }

          .complement-input {
            height: 40px;
            width: 100%;
            border: none;
            border-radius: 5px;
            background: #D3D3D3;
          }
        }
      }

      .adress-two {
        display: flex;
        margin-top: 40px;
        width: 90%;
        height: 70px;

        .city-div {
          width: 33%;

          h4 {
            margin-bottom: 10px;
          }

          .city-input {
            height: 40px;
            width: 95%;
            border: none;
            border-radius: 5px;
            background: #D3D3D3
          }
        }

        .country-div {
          width: 33%;

          h4 {
            margin-bottom: 10px;
          }

          .country-input {
            height: 40px;
            width: 95%;
            border: none;
            border-radius: 5px;
            background: #D3D3D3
          }
        }

        .postal-code-div {
          width: 33%;

          h4 {
            margin-bottom: 10px;
          }

          .postal-code-input {
            height: 40px;
            width: 95%;
            border: none;
            border-radius: 5px;
            background: #D3D3D3
          }
        }
      }
    }
  }

`;
