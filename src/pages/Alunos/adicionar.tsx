import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adicionarAluno } from "../../services/aluno";
import IAluno from "../../models/aluno";
import AlunosForm from "../../components/Forms/AlunosForm";
 
import {
    ContainerAdd,
    MainAdd,
    TitleAdd,
} from "./styles"

const Adicionar = () => {
    const [aluno, setAluno] = useState<IAluno>({id:0, nome:"", universidade:"", curso:"", dataNascimento:""});

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setAluno({...aluno, [name]: value.toUpperCase()});
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        adicionarAluno(aluno)
        navigate("/alunos");
    }

    return (
        <ContainerAdd>
            <MainAdd>
                <TitleAdd>Adicione um(a) Aluno(a)</TitleAdd>
                    <AlunosForm
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        aluno={aluno}
                    />
            </MainAdd>
        </ContainerAdd>  
   
    )
} 
export default Adicionar   