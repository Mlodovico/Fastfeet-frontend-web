import styled from 'styled-components';
import { darken} from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #D3D3D3;
  align-items: left;
  justify-content: left;
`;

export const Content = styled.div `
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  height: 60px;
  max-width: 100%;
  background: #fff;
  align-items: baseline;
  border-block-end-color: black;

  img {
    margin-right: 25px;
    margin-left: 15px;
    height: 20px;
    width: 125px;
    margin-top: 20px;
  }

  strong {
    color: #A9A9A9;
    font-size: 30px;
  }

  button {
    margin-left: 20px;
    background: #F8F8FF;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    align-items: center;
    color: #A9A9A9;
    font-weight: bold;
    border: 0;
    padding: 30 40px;
    transition: color 0.5s;

    &:hover {
      color: ${darken(0.20, '#A9A9A9')}
    }
  }

  div {

    display: row;
    margin-top: 60px;
    margin-left: 200px;
    margin-block-end: 300px;
    justify-content: flex-end;

    h3 {
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
    }

    input {
      margin-top: 150px;
      height: 30px;
      width: 250px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: none;
      border-radius: 5px;
      width: 150px;
      height: 30px;
      margin-left: 300px;
  }
 }
`;
