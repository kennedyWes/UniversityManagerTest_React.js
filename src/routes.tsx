import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/header";
import Home from "./pages/Home/home";
import SignIn from "./pages/SignIn/signin";
import Menu from "./components/Menu/menu";
import Universidades from "./pages/Universidades/universidades";
import UniversidadesAdicionar from "./pages/Universidades/adicionar";
import UniversidadesEditar from "./pages/Universidades/editar";
import Cursos from "./pages/Cursos/cursos";
import CursosAdicionar from "./pages/Cursos/adicionar";
import CursosEditar from "./pages/Cursos/editar";
import Professores from "./pages/Professores/professores";
import ProfessoresAdicionar from "./pages/Professores/adicionar";
import ProfessoresEditar from "./pages/Professores/editar";
import Alunos from "./pages/Alunos/alunos";
import AlunosAdicionar from "./pages/Alunos/adicionar";
import AlunosEditar from "./pages/Alunos/editar";
import Footer from "./components/Footer/footer";


export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />

        <div style={{display: "flex"}}>
          <Menu />
            <main style={{flex:1}}>
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/universidades" element={<Universidades />} />
              <Route path="/universidades/adicionar" element={<UniversidadesAdicionar /> } />
              <Route path="/universidades/editar/:id" element={<UniversidadesEditar />} />
              <Route path="/cursos" element={<Cursos />} />
              <Route path="/cursos/adicionar" element={<CursosAdicionar /> } />
              <Route path="/cursos/editar/:id" element={<CursosEditar />} />
              <Route path="/professores" element={<Professores />} />
              <Route path="/professores/adicionar" element={<ProfessoresAdicionar /> } />
              <Route path="/professores/editar/:id" element={<ProfessoresEditar />} />
              <Route path="/alunos" element={<Alunos />} />
              <Route path="/alunos/adicionar" element={<AlunosAdicionar /> } />
              <Route path="/alunos/editar/:id" element={<AlunosEditar />} />
              </Routes>
            </main>
        </div>
      <Footer />
    </BrowserRouter>
  );
}
