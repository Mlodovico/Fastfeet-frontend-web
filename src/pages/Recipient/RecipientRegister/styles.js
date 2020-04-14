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

  .custom-div {
    width: 100%;
    height: 500px;
    margin-top: 40px;
    background: #fff;
    border-radius: 5px;
  }

  .custom-div-template {
    margin-right: 30px;
    margin-top: 10px;
    margin-bottom: 30px;
    margin-left: 30px;
  }

    .div-custom-name {
      width: 100%;
      height: 100px;

      h3 {
        margin-bottom: 20px;
        font-size: 15px;
      }

      input {
        height: 45px;
        width: 80%;
        border-radius: 5px;
        align-items: center;
        margin-top: 10px;
        border-style: groove;
      }
    }

    .custom-div-adress {
      background:red;
      height: 390px;

      h5 {
        margin-bottom: 10px;
      }

      input{
        height: 45px;
        width: 50%;
        border-radius: 5px;
        border-style: groove;
      }
    }
`;
