import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CursosForm  from "../../components/Forms/CursosForm";
import { obterCurso, editarCurso } from "../../services/curso";
import ICurso from "../../models/curso";
import { useParams } from "react-router-dom";
 
import {
    ContainerAdd,
    MainAdd,
    TitleAdd,
} from "./styles"


const Editar = () => {
    const [curso, setCurso] = useState<ICurso>({id:0, nome:"", universidade:"", disciplinas:"", duracao:0});

    const navigate = useNavigate();

    const { id } = useParams();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setCurso({...curso, [name]: value.toUpperCase()});
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (id) {
            editarCurso(parseInt(id), curso)
            navigate("/cursos");
        }
    }

    useEffect(() => {
        if (id) {
            const resposta = obterCurso(parseInt(id))
                if (resposta) setCurso(resposta);
        }        
    },[])

    return (
            <ContainerAdd>
                <MainAdd>
                    <TitleAdd>Edite o Curso</TitleAdd>
                    <CursosForm 
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        curso={curso}
                        />
                </MainAdd>    
            </ContainerAdd>
    )
} 
export default Editar   