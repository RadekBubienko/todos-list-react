import styled, { css } from "styled-components";

export const List = styled.ul`
    padding: 20px;
    margin: 0;
    list-style-type: none;
`;

export const Item = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.color.alto};
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
  color: ${({ theme }) => theme.color.darkGrey};
  
  ${({ done }) => done && css`
    text-decoration-line: line-through;
  `}
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.color.white};
  margin: 5px;
  padding: 0px;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
`;

export const ButtonDone = styled(Button)`
  background-color: ${({ theme }) => theme.color.forestGreen};
    
  &:hover {
    filter: brightness(120%);
  }
`;

export const ButtonRemove = styled(Button)`
  background-color: ${({ theme }) => theme.color.crimson};

  &:hover {
    filter: brightness(120%);
  }
`;