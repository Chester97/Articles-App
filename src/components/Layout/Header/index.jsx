import React from 'react';
import { Navbar } from 'react-bootstrap';
import * as S from './styles';

const Header = () => (
  <Navbar
    bg="dark"
    variant="dark"
    expand="lg"
    className="justify-content-center"
  >
    <Navbar.Brand>
      <S.HeaderButton to="/">Articles</S.HeaderButton>
    </Navbar.Brand>
  </Navbar>
);

export default Header;
