import ICurso from "../models/curso";
import { cursos } from "../server";
import { obter, salvar } from "./localStorage";

const KEY = "cursos";

export const initCurso = () => {
    const dados = obter<ICurso>(KEY)
    if (dados === null) {
        salvar<ICurso>(KEY, cursos)
    }
}

export const adicionarCurso = (curso: ICurso) => {
    let dados = obter<ICurso>(KEY); 
        if (dados.length > 0) {
            const novosDados = {...curso, id: dados[dados.length - 1].id+1};
            dados.push (novosDados) 
        }else{
            dados = [{...curso, id: 1}]
    }
    salvar<ICurso>(KEY, dados)
};

export const listarCursos = () => {
    return obter<ICurso>(KEY);
}

export const excluirCursos = (id: number) => {
    const dados = obter<ICurso>(KEY);
    const listaFiltrada = dados.filter((curso) => {   
        return curso.id !== id 
      })
      salvar<ICurso>(KEY, listaFiltrada);
      return listaFiltrada;
}

export const obterCurso = (id: number) => {
    const dadosCurso = obter<ICurso>(KEY);
    return dadosCurso.find((curso) => curso.id === id)
    }

export const editarCurso = (id: number, curso: ICurso) => {
    const dadosEditados = obter<ICurso>(KEY)
    const index = dadosEditados.findIndex(curso => curso.id === id);
    dadosEditados.splice(index, 1, curso);
    salvar<ICurso>(KEY, dadosEditados)
}