import React from 'react';
import styled from 'styled-components';
import {Link} from '@reach/router';

let Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  width: 100vw;
  max-width: 100%;
  
  padding: 1rem;
  margin: 1rem auto;
`

let Ul = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;

`
let Li = styled.li`
  margin: 0 1rem;
`
let StyledLink = styled(Link)`
  text-decoration: none;
  padding: 1rem;
`

export const Navbar = () => (
  <Nav>
  <Ul>
  <Li><StyledLink to="/">Home</StyledLink></Li>
  <Li><StyledLink to="/countries">Countries</StyledLink></Li>
  </Ul>  
  </Nav>
)

export default Navbar;