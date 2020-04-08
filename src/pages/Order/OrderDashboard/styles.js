import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  .orders-content {
    width: 80%;
    margin-left: 2px;

    h3 {
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
      margin-top: 60px;
      margin-bottom: 20px;
    }

    .functional-row {
      display: flex;
      justify-content: space-between;
    }

    a {
      display: flex;
      justify-content: center;
      height: 25px;
      padding: 10px 20px;
      font-family: 'Roboto', sans-serif;
      font-size: 10px;
      font-weight: bold;
      justify-content: space-between;
      background: #7159c1;
      color: #FFF;
      border: none;
      border-radius: 4px;
      transition: background 0.5s;

      &:hover {
        background: ${darken(0.10, '#7159c1')}
      }
    }

    table {
      width: 100%;

        tr {
          height: 30px;
        }

        th {
          font-family: 'Roboto', sans-serif;
          font-size: 16px;

        }

        td {
          font-family: 'Roboto', sans-serif;
          font-size: 14px;
          color: #808080;
          font-weight: bold;
          border-top: 10px solid #D3D3D3;
        }

        .orders-table-content {
          margin-top: 15px;
          background: #fff;
          border-radius: 40px;
        }

      }

      td:first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }

      td:last-child {
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
      }

      td {
        text-align: center;
      }

      td div {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
          width: 50px;
          height: 45px;
          border-radius: 50px;
          margin-right: 10px;
        }

        span {
          font-family: 'Roboto', sans-serif;
          font-size: 14px;
          font-weight: bold;
          color: #808080;
        }
      }

    }
`;

export const Input = styled.input`
  height: 25px;
  width: 200px;
  border: none;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const Status = styled.div`
  height: 25px;
  width: 120px;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: bold;
  border-radius: 50px;
  padding: 5px 24px;
  margin: 0 auto;
  background: ${props => props.status.background};
  color: ${props => props.status.color};
`;

