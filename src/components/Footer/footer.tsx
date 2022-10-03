import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import {
  Container,
  Nav,
  Logo,
  AreaLogo,
  Text,
  AreaText,
  AreaIcon,
  Icons,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <AreaLogo>
        <AreaText>
          <Text>info@magnifinance.com</Text>
          <AreaIcon>
            <FaPhoneAlt style={{ padding: 3 }} size={14} />
            <Text>+351 218 215 794</Text>
          </AreaIcon>
        </AreaText>
        <Logo />
      </AreaLogo>
      <Nav>
        <Text>Nos Siga nas Redes</Text>
        <Icons>
          <a href="https://pt-br.facebook.com/MagniFinance/" target="_blank" rel="noopner noreferrer">
            <FaFacebookSquare size={33} />
          </a>
          <a href="https://twitter.com/magnifinancecom" target="_blank" rel="noopner noreferrer" >
            <FaTwitterSquare size={33} />
          </a>
          <a href="https://www.instagram.com/magnifinance/" target="_blank" rel="noopner noreferrer">
            <FaInstagramSquare size={33} />
          </a>      
        </Icons>
      </Nav>
    </Container>
  );
};

export default Footer;
