import { toAuthor, toTasks } from "../../routes";
import { StyledNavLink, List } from "./styled";


const Navigation = () => {
  return (
    <nav>
      <List>
        <li>
          <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
        </li>
      </List>
    </nav>
  )
};

export default Navigation;