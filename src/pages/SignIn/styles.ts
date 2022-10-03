import styled from "styled-components";
import LogoImage from "../../assets/images/magniFinance.png";

const Container = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1.2rem;
    margin-left: -4rem;
`;

const MainSignin = styled.main`
display: flex;
    flex: 1;
    border: 1px solid;
    height: 80%;
    width: 100%;
    padding: 1rem;
    box-shadow: 10px 10px 10px #373737;
`;


const BackgroundImage = styled.div`
  background-image: url(${LogoImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 50vh;
  width: 35%;
  margin-top: .5rem;
  margin-bottom: 2.5rem;
  display: inline-block;
  justify-content: space-between;
  align-self: center;
`;

const Login = styled.div`
  display: inline-block;
  justify-content: center;
  gap: .4rem;
  height: 60vh;
  width: 30%;
  margin-top: .5rem;
  border-radius: 1rem;
  background: linear-gradient(#BBBBBB, #292d33);
`;

const Register = styled.div`
  background-color: #292d33;
  display: inline-block;
  height: 60vh;
  width: 30%;
  margin-top: .5rem;
  margin-bottom: 5.5rem;
  border-radius: 1rem;
  background: linear-gradient(#292d33, #BBBBBB);
`;

const Title = styled.h1`
  color: #fff;
  font-size: 2.7rem;
  font-weight: bold;
  text-align: center;
  font-family: "Italianno", sans-serif;
`;

const InputArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ButtonArea = styled.div`
  display: flex;
  width: 82%;
  justify-content: flex-start;
`;

const ButtonSignIn = styled.button`
  background-color: #db545a;
  color: #fff;
  border: none;
  padding: 14px;
  font-size: 0.6em;
  border-radius: 2px;
`;

const RecoveryPassaword = styled.p`
  color: #fff;
  font-size: 0.8em;
  text-align: center;
  margin-left: 20px;
`;

export {
  Container,
  MainSignin,
  BackgroundImage,
  Login,
  Register,
  Title,
  InputArea,
  ButtonSignIn,
  ButtonArea,
  RecoveryPassaword,
};
