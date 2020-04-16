import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  padding: 0 150px;
  width: 100%;
  margin-top: 100px;
  font-family: 'Roboto', sans-serif;

  .custom-div{
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

    .save-deliveryman-button {
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

      .avatar-img-div{
        display: flex;
        margin-top: 25px;
        justify-content: space-around;

        .input-avatar-file {
          width: 28%;
          height: 150px;
          border-style: dashed;
          border-radius: 100%;
          border-color: #D3D3D3;
          }
        }

        .name-email-custom-div {
          margin-top: 20px;

          h4 {
            margin-bottom: 10px;
            margin-top: 10px;
          }

          .input-name-file {
            width: 100%;
            height: 35px;
            background: #D3D3D3;
            border: none;
            border-radius:5px;
          }

          .input-email-file {
            width: 100%;
            height: 35px;
            background: #D3D3D3;
            border: none;
            border-radius:5px;
        }
      }
    }
`;
