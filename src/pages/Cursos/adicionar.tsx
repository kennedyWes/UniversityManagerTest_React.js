import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adicionarCurso } from "../../services/curso";
import ICurso from "../../models/curso";
import CursosForm from "../../components/Forms/CursosForm";

import {
    ContainerAdd,
    MainAdd,
    TitleAdd,
} from "./styles"


const Adicionar = () => {
    const [curso, setCurso] = useState<ICurso>({id:0, nome:"", universidade:"", disciplinas:"", duracao:0});

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setCurso({...curso, [name]: value.toUpperCase()});
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        adicionarCurso(curso)
        navigate("/cursos");
    }

    return (
        <ContainerAdd>
            <MainAdd>
                <TitleAdd>Adicione o Curso</TitleAdd>
                    <CursosForm 
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        curso={curso}
                    />
            </MainAdd>    
        </ContainerAdd>
    )
} 
export default Adicionar   