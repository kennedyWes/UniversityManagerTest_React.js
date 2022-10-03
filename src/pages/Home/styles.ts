import styled from "styled-components";
import ImgHome from "../../assets/images/magniFinance.png";


const Container = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1.2rem;
    margin-left: -4rem;
`;
const MainHome = styled.main`
    flex: 1;
    border: 1px solid;
    height: 75vh;
    width: 70rem;
    padding: 1rem;
    box-shadow: 10px 10px 10px #373737;
`;

const Img = styled.img.attrs({
    src: ImgHome,
  })`
    margin-top: 5rem;
    width: 70rem;
    height: 20rem;
`;

export {
    Container, MainHome, Img
};
