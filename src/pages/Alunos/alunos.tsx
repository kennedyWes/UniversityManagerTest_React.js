import React from "react";
import IAluno from "../../models/aluno";
import { alunos }  from "../../server/index"
import { useState, useEffect } from "react"
import Button  from "../../components/Button/button";
import { Link } from "react-router-dom";
import { excluirAlunos, listarAlunos } from "../../services/aluno";

import { 
  Container, 
  MainAlunos, 
  TitleMain, 
  AlunosTable, 
  TableTopic, 
  TableTitle, 
  TableBody, 
  TitleTd, 
} from './styles'

const Alunos = () => {
  const [listaAlunos, setListaAlunos] = useState<IAluno[]>([])


function excluir (id: number) {
  const listaFiltrada = excluirAlunos(id)
  setListaAlunos(listaFiltrada) 
}  
  useEffect(() => {
    setListaAlunos(listarAlunos)
  }, [])

  return (
    <body>
        <Container>
            <MainAlunos>
               <TitleMain>Lista de Alunos</TitleMain>         
               <AlunosTable>
                  <TableTopic>
                    <tr>
                      <TableTitle>ID</TableTitle>
                      <TableTitle>Nome</TableTitle>
                      <TableTitle>Universidade</TableTitle>
                      <TableTitle>Curso</TableTitle>
                      <TableTitle>Data de Nascimento</TableTitle>
                    </tr>
                  </TableTopic>
                
                  <TableBody>
                    {listaAlunos.map((aluno) => {
                        return (
                          <tr key={aluno.id}>
                            <TitleTd>{aluno.id}</TitleTd>
                            <TitleTd>{aluno.nome}</TitleTd>
                            <TitleTd>{aluno.universidade}</TitleTd>
                            <TitleTd>{aluno.curso}</TitleTd>
                            <TitleTd>{aluno.dataNascimento}</TitleTd>
                          
                            <td style= {{width:"15rem"}}>
                              <Link to= {`/alunos/editar/${aluno.id}`}>
                                <Button
                                  >Editar
                                </Button>
                              </Link>

                              <Button
                                type="button"
                                tema="Primario"
                                onClick={() => excluir(aluno.id)}
                                >Excluir
                              </Button>
                            </td>
                          </tr>
                        )
                    }) }
            
                    <Link to="/alunos/adicionar">
                      <Button
                        tema="Primario"
                      >Adicionar
                      </Button>
                    </Link>
                  </TableBody>
              </AlunosTable>
            </MainAlunos>
        </Container>
    </body>
  );
};

export default Alunos;
