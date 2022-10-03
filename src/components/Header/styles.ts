import styled from "styled-components";
import LogoImage from "../../assets/images/magniLogo1.png";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  background: linear-gradient(#888888, #FFFFFF);
`;

const AreaLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;
  padding: 5px;
`;

const Nav = styled.nav`
    display: flex;
    padding: 30px;
    justify-content: space-evenly;
    color: #000;
    list-style: none;
    align-items: center;
    gap: 2.2rem;
      & > a{
        color: #000;
        text-decoration: none;
      }
        & > a:last-child {
          background: rgba(124, 10, 39, 0.925);
          color: white;
          padding: .8rem;
          margin-right: .8rem;
          transform: scale(1.03);
        }
        & > a:hover {
          transform: scale(1.1);
          color: #C78C19;
        }
        & > a:active {
          color: #C78C19;
          text-decoration: underline;
        }
`;


const Logo = styled.img.attrs({
  src: LogoImage,
})`
  width: 14rem;
  height: 75px;
  background-color: #fff;
  border-radius: 15px;
  margin-left: -4rem;
  background: linear-gradient(#888888, #FFFFFF);
`;

export { Container, Nav, Logo, AreaLogo };
