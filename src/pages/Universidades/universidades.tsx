import React from "react";
import IUniversidade from "../../models/universidade";
import { universidades }  from "../../server/index"
import { useState, useEffect } from "react"
import Button  from "../../components/Button/button";
import { Link } from "react-router-dom";
import { excluirUniversidades, listarUniversidades } from "../../services/universidade";

import { 
  Container, 
  MainUni,
  UniDiv,
  UniTable,
  TitleMain,
  TableTopic,
  TableTitle,
  TableBody,
  TitleTd
} from "./styles"


const Universidades = () => {
  const [listaUniversidades, setListaUniversidades] = useState<IUniversidade[]>([])


function excluir (id: number) {
  const listaFiltrada = excluirUniversidades(id)
  setListaUniversidades(listaFiltrada) 
}  
  useEffect(() => {
    setListaUniversidades(listarUniversidades)
  }, [])

  return (
    <Container>
      <MainUni>
        <UniDiv>
        <TitleMain>Lista de Universidades</TitleMain>
        
        <UniTable>
            <TableTopic>
              <tr>
                <TableTitle>ID</TableTitle>
                <TableTitle>Nome</TableTitle>
                <TableTitle>Local</TableTitle>
                
              </tr>
            </TableTopic>
            <TableBody>
              {listaUniversidades.map((universidade) => {
                return (
                  <tr key={universidade.id}>
                    <TitleTd>{universidade.id}</TitleTd>
                    <TitleTd>{universidade.nome}</TitleTd>
                    <TitleTd>{universidade.local}</TitleTd>
                    <td style= {{width:"15rem"}}>
                      <Link to={`/universidades/editar/${universidade.id}` }>
                        <Button> 
                          Editar
                        </Button>  
                      </Link>

                        <Button
                          type="button"
                          tema="Primario"
                          onClick={() => excluir(universidade.id)}
                          > 
                          Excluir
                        </Button>  
                    </td>
              </tr>  
                  
                )
              }) }
            </TableBody>
        </UniTable>
          
          <Link to="/universidades/adicionar">      
            <Button
              tema="Primario"
              >Adicionar
            </Button>        
          </Link>  
        </UniDiv>
      </MainUni>
    </Container>
  );
};

export default Universidades;
