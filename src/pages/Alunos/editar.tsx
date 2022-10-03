import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { obterAluno, editarAluno } from "../../services/aluno";
import IAluno from "../../models/aluno";
import AlunosForm from "../../components/Forms/AlunosForm";
import { useParams } from "react-router-dom";

import {
    ContainerAdd,
    MainAdd,
    TitleAdd,
} from "./styles"

 
const Editar = () => {
    const [aluno, setAluno] = useState<IAluno>({id:0, nome:"", universidade:"", curso:"", dataNascimento:""});

    const navigate = useNavigate();

    const { id } = useParams();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setAluno({...aluno, [name]: value.toUpperCase()});
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (id) {
            editarAluno(parseInt(id), aluno)
            navigate("/alunos");
        }
    }

    useEffect(() => {
        if (id ) {
            const resposta = obterAluno(parseInt(id))
                if (resposta) setAluno(resposta);
        }   
    },[])

    return (
        <ContainerAdd>
            <MainAdd>
                <TitleAdd>Edite o(a) Aluno(a)</TitleAdd>
                <AlunosForm 
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    aluno={aluno}
                    />
            </MainAdd>       
        </ContainerAdd>
       
      
    )
} 
export default Editar  