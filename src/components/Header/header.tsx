import React from "react";
import { Link } from "react-router-dom";
import { 
  Container, 
  Nav, 
  Logo, 
  AreaLogo 
} from "./styles";

const Header = () => {
  return (
    <Container>
      <AreaLogo>
        <Logo />
      </AreaLogo>
      <Nav>
        <Link to="/signin">LOGIN</Link>
      </Nav>
    </Container>
  );
};

export default Header;
