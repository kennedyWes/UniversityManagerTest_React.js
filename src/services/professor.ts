import IProfessor from "../models/professor";
import { professores } from "../server";
import { obter, salvar } from "./localStorage";

const KEY = "professores";

export const initProfessor = () => {
    const dados = obter<IProfessor>(KEY)
    if (dados === null) {
        salvar<IProfessor>(KEY, professores)
    }
}

export const adicionarProfessor = (professor: IProfessor) => {
    let dados = obter<IProfessor>(KEY); 
        if (dados.length > 0) {
            const novosDados = {...professor, id: dados[dados.length - 1].id+1};
            dados.push (novosDados) 
        }else{
            dados = [{...professor, id: 1}]
    }
    salvar<IProfessor>(KEY, dados)
};

export const listarProfessores = () => {
    return obter<IProfessor>(KEY);
}

export const excluirProfessores = (id: number) => {
    const dados = obter<IProfessor>(KEY);
    const listaFiltrada = dados.filter((professor) => {   
        return professor.id !== id 
      })
      salvar<IProfessor>(KEY, listaFiltrada);
      return listaFiltrada;
}

export const obterProfessor = (id: number) => {
    const dadosProfessor = obter<IProfessor>(KEY);
    return dadosProfessor.find((professor) => professor.id === id)
    }

export const editarProfessor = (id: number, professor: IProfessor) => {
    const dadosEditados = obter<IProfessor>(KEY)
    const index = dadosEditados.findIndex(professor => professor.id === id);
    dadosEditados.splice(index, 1, professor);
    salvar<IProfessor>(KEY, dadosEditados)
}