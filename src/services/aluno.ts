import IAluno from "../models/aluno";
import { alunos } from "../server";
import { obter, salvar } from "./localStorage";

const KEY = "alunos";

export const initAluno = () => {
    const dados = obter<IAluno>(KEY)
    if (dados === null) {
        salvar<IAluno>(KEY, alunos)
    }
}

export const adicionarAluno = (aluno: IAluno) => {
    let dados = obter<IAluno>(KEY); 
        if (dados.length > 0) {
            const novosDados = {...aluno, id: dados[dados.length - 1].id+1};
            dados.push (novosDados) 
        }else{
            dados = [{...aluno, id: 1}]
    }

    salvar<IAluno>(KEY, dados)
};

export const listarAlunos = () => {
    return obter<IAluno>(KEY);
}


export const excluirAlunos = (id: number) => {
    const dados = obter<IAluno>(KEY);
    const listaFiltrada = dados.filter((aluno) => {   
        return aluno.id !== id 
      })
      salvar<IAluno>(KEY, listaFiltrada);
      return listaFiltrada;
}

export const obterAluno = (id: number) => {
    const dadosAluno = obter<IAluno>(KEY);
    return dadosAluno.find((aluno) => aluno.id === id)
    }

export const editarAluno = (id: number, aluno: IAluno) => {
    const dadosEditados = obter<IAluno>(KEY)
    const index = dadosEditados.findIndex(aluno => aluno.id === id);
    dadosEditados.splice(index, 1, aluno);
    salvar<IAluno>(KEY, dadosEditados)
}