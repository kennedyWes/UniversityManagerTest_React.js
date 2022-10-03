import styled from "styled-components";
import LogoImage from "../../assets/images/magniFinance.png";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
  background: linear-gradient(#FFFFFF, #888888);
`;

const AreaLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55%;
  height: 100%;
  padding: 6px;
  justify-content: space-evenly;
`;

const AreaText = styled.div`
  margin: 0 0 0 4rem;
`;

const AreaIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Text = styled.p`
  font-size: 16px;
  color: #000;
  margin: 0;
  padding: 1px;
`;

const Nav = styled.div`
  width: 30%;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000;
`;

const Icons = styled.div`
  display: flex;
  width: 20%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1px;
  & :hover {
          transform: scale(1.1);
          color: #C78C19;
        }
        & :active {
          color: #C78C19;
          text-decoration: underline;
        }
`;

const Logo = styled.img.attrs({
  src: LogoImage,
})`
  width: 75px;
  height: 65px;
  background-color: #fff;
  border-radius: 30px;
  margin-left: 25rem;
`;

export { Container, Nav, Logo, AreaLogo, Text, AreaText, AreaIcon, Icons };
