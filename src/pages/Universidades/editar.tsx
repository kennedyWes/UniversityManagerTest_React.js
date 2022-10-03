
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { editarUniversidade } from "../../services/universidade";
import IUniversidade from "../../models/universidade";
import UniForm from "../../components/Forms/UniForm";
import { useParams } from "react-router-dom";
import { obterUniversidade } from "../../services/universidade";

import {
    ContainerAdd,
    MainAdd,
    TitleAdd,
} from "./styles"

 
const Editar = () => {
    const [universidade, setUniversidade] = useState<IUniversidade>({id:0, nome:"", local:""});

    const navigate = useNavigate();

    const { id } = useParams();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUniversidade({...universidade, [name]: value.toUpperCase()});
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (id) {
            editarUniversidade(parseInt(id), universidade)
            navigate("/universidades");
        }
    }

    useEffect(() => {
        if (id ) {
            const resposta = obterUniversidade(parseInt(id))
                if (resposta) setUniversidade(resposta);
        }
        
    },[])

    return (
        <ContainerAdd>
            <MainAdd>
                <TitleAdd>Edite a Universidade</TitleAdd>
                <UniForm 
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    universidade={universidade}
                    />
            </MainAdd>       
        </ContainerAdd>
       
      
    )
} 
export default Editar  