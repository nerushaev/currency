import { NavLink } from "react-router-dom";
import styled from 'styled-components'

const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
`;

const Link = styled(NavLink)`
  padding: 20px;
  color: black;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 12px;
  }
`;


export default function NavBar() {
  return (
    <header>
      <NavWrapper>
      <Link to="/">Home</Link>
      <Link to="/exchange">Exchange</Link>
      </NavWrapper>
    </header>
  )
}
