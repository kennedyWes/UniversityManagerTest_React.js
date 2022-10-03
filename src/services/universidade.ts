import IUniversidade from "../models/universidade";
import { universidades } from "../server";
import { obter, salvar } from "./localStorage";

const KEY = "universidades";

export const initUniversidade = () => {
    const dados = obter<IUniversidade>(KEY)
    if (dados === null) {
        salvar<IUniversidade>(KEY, universidades)
    }
}

export const adicionarUniversidade = (universidade: IUniversidade) => {
    let dados = obter<IUniversidade>(KEY); 
        if (dados.length > 0) {
            const novosDados = {...universidade, id: dados[dados.length - 1].id+1};
            dados.push (novosDados) 
        }else{
            dados = [{...universidade, id: 1}]
    }

    salvar<IUniversidade>(KEY, dados)
};

export const listarUniversidades = () => {
    return obter<IUniversidade>(KEY);
}


export const excluirUniversidades = (id: number) => {
    const dados = obter<IUniversidade>(KEY);
    const listaFiltrada = dados.filter((universidade) => {   
        return universidade.id !== id 
      })
      salvar<IUniversidade>(KEY, listaFiltrada);
      return listaFiltrada;
}

export const obterUniversidade = (id: number) => {
    const dadosUniversidade = obter<IUniversidade>(KEY);
    return dadosUniversidade.find((universidade) => universidade.id === id)
    }

export const editarUniversidade = (id: number, universidade: IUniversidade) => {
    const dadosEditados = obter<IUniversidade>(KEY)
    const index = dadosEditados.findIndex(universidade => universidade.id === id);
    dadosEditados.splice(index, 1, universidade);
    salvar<IUniversidade>(KEY, dadosEditados)
}