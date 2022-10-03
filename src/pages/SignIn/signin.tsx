import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import Button from "../../components/Button/button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";

import {
  Container,
  MainSignin,
  BackgroundImage,
  Login,
  Register,
  Title,
  InputArea,
  ButtonSignIn,
  ButtonArea,
  RecoveryPassaword
} from "./styles";

const SignIn = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [authentication, setAuthentication] = useState(false);

  const addUser = () => {
    console.log(newEmail, newPassword);
    createUserWithEmailAndPassword(auth, newEmail, newPassword)
      .then((value) => {
        toast.success("Congratulations!! Account created successfully");
        setAuthentication(true);
      })
      .catch((error) => toast.warn("Error creating account"));
  };

  const _login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        toast.success("Welcome to the system");
        navigate("/", { replace: true });
      })
      .catch((error) => toast.warn("Error signing in"));
  };

  return (
      <Container>
          <MainSignin>       
            <Login>
              <Title>Login</Title>
                <InputArea>
                  <Input
                    placeholder="E-mail"
                    label="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
              
                  <Input
                    placeholder="Senha"
                    label="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <ButtonArea>
                      <Button  
                        onClick={_login}
                        tema="Primario"
                        >LOGIN
                      </Button>
                    <RecoveryPassaword>Esqueci minha senha</RecoveryPassaword>
                  </ButtonArea>
                </InputArea>
            </Login>

            <BackgroundImage />
            
            <Register>
              <Title>Cadastre-se</Title>
                <InputArea>
                  <Input
                    value={name}
                    placeholder="Insira seu nome"
                    label="Nome"
                    onChange={(e) => setName(e.target.value)}
                  />

                  <Input
                    value={newEmail}
                    placeholder="Insira seu e-mail"
                    label="E-mail"
                    onChange={(e) => setNewEmail(e.target.value)}
                  />

                  <Input
                    value={newPassword}
                    placeholder="Senha"
                    label="Senha"
                    onChange={(e) => setNewPassword(e.target.value)}
                  />

                  <Button 
                    onClick={addUser}
                    tema="Primario"
                    >ENVIAR
                  </Button>
              </InputArea>
            </Register>
        </MainSignin>
      </Container>
  );
};

export default SignIn;
