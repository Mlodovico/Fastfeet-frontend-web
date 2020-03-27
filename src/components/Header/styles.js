import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  height: 64px;
  max-width: 100%;
  margin: 0 right;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: right;

    img {
      margin-right: 30px;
      height:20px;
      width: 130px;
      padding-right: 10px;
      border-right: 3px solid #eee;
    }

    a {
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      border: none;
      color: #808080;
      margin-left: 15px;
      transition: color 0.5s;

      &:hover {
        color: ${darken(0.20, '#808080')}
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 60px;
  border-left: 3px solid #eee;

  div {
    font-family: 'Roboto', sans-serif;
    text-align: right;
    margin-left: 10px;

    strong {
      display: block;
      color: #333;
    }

    button {
      margin-top: 5px;
      font-size: 15px;
      border: none;
      background: #fff;
      color: #7159c1;
    }
  }
`;
