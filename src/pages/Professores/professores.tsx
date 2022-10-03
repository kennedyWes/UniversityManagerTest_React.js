import React from "react";
import IProfessor from "../../models/professor";
import { professores }  from "../../server/index"
import { useState, useEffect } from "react"
import Button  from "../../components/Button/button";
import { Link } from "react-router-dom";
import { excluirProfessores, listarProfessores } from "../../services/professor";

import { 
  Container, 
  MainProf,
  ProfDiv, 
  TitleMain, 
  ProfTable, 
  TableTopic, 
  TableTitle, 
  TableBody, 
  TitleTd, 
} from './styles'

const Professores = () => {
  const [listaProfessores, setListaProfessores] = useState<IProfessor[]>([])


function excluir (id: number) {
  const listaFiltrada = excluirProfessores(id)
  setListaProfessores(listaFiltrada) 
}  
  useEffect(() => {
    setListaProfessores(listarProfessores)
  }, [])

  return (
      <Container>
        <MainProf>
          <ProfDiv>
            <TitleMain>Lista de Professores</TitleMain> 
                
            <ProfTable>
              <TableTopic>
                <tr>
                  <TableTitle>ID</TableTitle>
                  <TableTitle>Nome</TableTitle>
                  <TableTitle>Curso</TableTitle>
                  <TableTitle>Disciplina</TableTitle>
                  <TableTitle>Salário</TableTitle>
                  <TableTitle>Data de Nascimento</TableTitle>
                </tr>
              </TableTopic>

              <TableBody>
                {listaProfessores.map((professor) => {
                  return (
                    <tr key={professor.id}>
                      <TitleTd>{professor.id}</TitleTd>
                      <TitleTd>{professor.nome}</TitleTd>
                      <TitleTd>{professor.curso}</TitleTd>
                      <TitleTd>{professor.disciplina}</TitleTd>
                      <TitleTd>{professor.salario}</TitleTd>
                      <TitleTd>{professor.dataNascimento}</TitleTd>

                      <td style= {{width:"15rem"}}>
                        <Link to={`/professores/editar/${professor.id}` }>
                          <Button> 
                            Editar
                          </Button>  
                        </Link>

                        <Button
                          type="button"
                          tema="Primario"
                          onClick={() => excluir(professor.id)}
                          >Excluir
                        </Button>
                      </td>
                    </tr>
                  )
              }) }
                <Link to="/professores/adicionar">
                  <Button
                    tema="Primario"
                    >Adicionar
                  </Button>
                </Link>
              </TableBody>
            </ProfTable>
          </ProfDiv>  
        </MainProf>
      </Container>
  );
};

export default Professores;