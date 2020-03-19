import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7159c1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');


  width: 100%;
  max-width: 400px;
  text-align: center;
  margin-top: 30px;
  background: #fff;
  border-radius: 10px;

  img {
    height: 40px;
    width: 250px;
    margin-top: 50px;
  }

  form {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    background: #fff;

    h4 {
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      text-align: left;
      margin-left: 20px;
      margin-right: 20px;
      margin-top: 10px;
    }

    input {
      background: rgba(0,0,0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin-left: 20px;
      margin-right: 20px;
    }

    button {
      height: 70px;
      width: 350px;
      margin-top: 20px;
      margin-left: 25px;
      background: #7159c1;
      color:#fff;
      border-radius: 10px;
      margin-block-end: 40px;
      font-size: 18px;
      font-family: 'Roboto', sans-serif;
      transition: background 0.5s;

      &:hover {
        background: ${darken(0.10, '#7159c1')}
      }
    }

    border-radius: 10px;
  }
`
