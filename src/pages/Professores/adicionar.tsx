import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adicionarProfessor } from "../../services/professor";
import IProfessor from "../../models/professor";
import ProfForm from "../../components/Forms/ProfForm";

import {
    ContainerAdd,
    MainAdd,
    TitleAdd,
} from "./styles"


const Adicionar = () => {
    const [professor, setProfessor] = useState<IProfessor>({id:0, nome:"", curso:"", disciplina:"", salario:0, dataNascimento:""});

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setProfessor({...professor, [name]: value.toUpperCase()});
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        adicionarProfessor(professor)
        navigate("/professores");
    }
    

    return (
        <ContainerAdd>
            <MainAdd>
                <TitleAdd>Adicione um(a) Professor(a)</TitleAdd>
                    <ProfForm
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        professor={professor}
                    />
            </MainAdd>
        </ContainerAdd>
    )
} 
export default Adicionar   