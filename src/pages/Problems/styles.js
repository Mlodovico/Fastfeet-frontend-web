import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  .problem-content {
    width: 80%;
    margin-left: 2px;

    h3 {
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
      margin-top: 60px;
      margin-bottom: 20px;
    }

  }

    table {
      width: 100%;

      tr {
        height: 60px;
      }

      th {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;

      }

      td {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        justify-content: center;
        color: #808080;
        font-weight: bold;
      }

      .problem-table-content {
        margin-top: 15px;
        background: #fff;
        border-radius: 40px;

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
      }
    }
`;
