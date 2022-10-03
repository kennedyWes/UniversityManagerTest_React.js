import React, { useEffect } from "react";
import RoutesApp from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initUniversidade } from "./services/universidade";
import { initCurso } from "./services/curso";
import { initProfessor } from "./services/professor";
import { initAluno } from "./services/aluno";
import "./styles/GlobalStyles.css"

function App() {
  useEffect(() => {
    initUniversidade()
    initCurso()
    initProfessor()
    initAluno()
  },[])

  return (
    <>
      <ToastContainer autoClose={3000} />
      <RoutesApp />
    </>
  );
}

export default App;
