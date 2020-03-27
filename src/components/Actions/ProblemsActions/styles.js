import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  margin-top: 25px;
`;

export const OptionsList = styled.div`
  position: absolute;
  width: 120px;
  top: calc(60% + 10px);
  background: #eee;
  display: ${props => props.visible? 'block' : 'none'};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #eee;
  }

  button {
    display: flex;
    justify-content: center;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: bold;
    background: #eee;
    color: #808080;
    margin-top: 4px;
    margin-left:5px;
    padding: 5px 10px;
  }
`;

