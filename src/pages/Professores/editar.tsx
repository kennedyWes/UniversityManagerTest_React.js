import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfForm  from "../../components/Forms/ProfForm";
import { obterProfessor, editarProfessor } from "../../services/professor";
import IProfessor from "../../models/professor";
import { useParams } from "react-router-dom";
 
import {
    ContainerAdd,
    MainAdd,
    TitleAdd,
} from "./styles"


const Editar = () => {
    const [professor, setProfessor] = useState<IProfessor>({id:0, nome:"", curso:"", disciplina:"", salario:0, dataNascimento:""});

    const navigate = useNavigate();

    const { id } = useParams();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setProfessor({...professor, [name]: value.toUpperCase()});
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (id) {
            editarProfessor(parseInt(id), professor)
            navigate("/professores");
        }
    }

    useEffect(() => {
        if (id) {
            const resposta = obterProfessor(parseInt(id))
                if (resposta) setProfessor(resposta);
        }        
    },[])

    return (
            <ContainerAdd>
                <MainAdd>
                    <TitleAdd>Edite o(a) Professor(a)</TitleAdd>
                    <ProfForm 
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        professor={professor}
                        />
                </MainAdd>    
            </ContainerAdd>
    )
} 
export default Editar