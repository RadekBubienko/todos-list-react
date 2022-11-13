import styled, { css } from "styled-components";

export const List = styled.ul`
    padding: 20px;
    margin: 0;
    list-style-type: none;
`;

export const Item = styled.li`
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  grid-gap: 10px;

  ${({ hidden }) => hidden && css`
    display: none;
  `}
`;

export const Content = styled.span`
  ${({ done }) => done && css`
    text-decoration-line: line-through;
  `}
`;

export const ButtonDone = styled.button`
    color: #ffffff;
    background-color: #008000;
    margin: 5px;
    padding: 0px;
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
    transition: 0.3s;

    ${({ toggleDone }) => toggleDone && css`
      background-color: #008000;
      
      &:hover {
        background-color: #008000a8;
      }
    `}
`;

export const ButtonRemove = styled.button`
    color: #ffffff;
    background-color: #ff0000;
    margin: 5px;
    padding: 0px;
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
    transition: 0.3s;

    ${({ remove }) => remove && css`
      background-color: #ff0000;

      &:hover {
        background-color: #ff0000a8;
      }
    `}
`;