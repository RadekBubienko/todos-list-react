import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 12px;
  list-style: none;
  background-color: ${({ theme }) => theme.color.teal};
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
    margin: 0 20px;
    

  &.${activeClassName} {
    font-weight: bold;
  }

  &:hover {
   border-bottom: 1px solid;
  }
`;