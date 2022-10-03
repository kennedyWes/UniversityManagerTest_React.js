import React from "react";
import ICurso from "../../models/curso";
import { cursos }  from "../../server/index"
import { useState, useEffect } from "react"
import Button  from "../../components/Button/button";
import { Link } from "react-router-dom";
import { excluirCursos, listarCursos } from "../../services/curso";

import { 
  Container, 
  MainCursos, 
  CursosDiv,
  TitleMain, 
  CursosTable, 
  TableTopic, 
  TableTitle, 
  TableBody, 
  TitleTd, 
} from './styles'

const Cursos = () => {
  const [listaCursos, setListaCursos] = useState<ICurso[]>([])


function excluir (id: number) {
  const listaFiltrada = excluirCursos(id)
  setListaCursos(listaFiltrada) 
}  
  useEffect(() => {
    setListaCursos(listarCursos)
  }, [])

  return (
        <Container>
          <MainCursos>
            <CursosDiv>
              <TitleMain>Lista de Cursos</TitleMain>
        
            <CursosTable>
              <TableTopic>
                <tr>
                  <TableTitle>ID</TableTitle>
                  <TableTitle>Nome</TableTitle>
                  <TableTitle>Universidade Disponível</TableTitle>
                  <TableTitle>Disciplinas</TableTitle>
                  <TableTitle>Duração</TableTitle>
                </tr>
              </TableTopic>
            
              <TableBody>
                {listaCursos.map((curso) => {
                  return (
                    <tr key={curso.id}>
                      <TitleTd>{curso.id}</TitleTd>
                      <TitleTd>{curso.nome}</TitleTd>
                      <TitleTd>{curso.universidade}</TitleTd>
                      <TitleTd>{curso.disciplinas}</TitleTd>
                      <TitleTd>{curso.duracao}</TitleTd>
                      <td style= {{width:"15rem"}}>
                        <Link to={`/cursos/editar/${curso.id}` }>
                          <Button> 
                            Editar
                          </Button>  
                        </Link>
                          
                          <Button
                            type="button"
                            tema="Primario"
                            onClick={() => excluir(curso.id)}
                            >Excluir
                          </Button>
                      </td>
                    </tr>
                  )
              }) }
            </TableBody>
          </CursosTable>

          <Link to="/cursos/adicionar">
            <Button
              tema="Primario"
              >Adicionar
            </Button>
          </Link>
        </CursosDiv>
      </MainCursos>
    </Container>
  );
};

export default Cursos;
