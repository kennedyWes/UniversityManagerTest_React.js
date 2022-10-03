import Button  from "../../components/Button/button";
import React, { useState } from "react";
import { FaHandHolding } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { adicionarUniversidade } from "../../services/universidade";
import IUniversidade from "../../models/universidade";
import UniForm from "../../components/Forms/UniForm";
import {
    ContainerAdd,
    MainAdd,
    TitleAdd,
} from "./styles"
 
const Adicionar = () => {
    const [universidade, setUniversidade] = useState<IUniversidade>({id:0, nome:"", local:""});

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUniversidade({...universidade, [name]: value.toUpperCase()});
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        adicionarUniversidade(universidade)
        navigate("/universidades");
    }

    return (
        <ContainerAdd>
            <MainAdd>
                <TitleAdd>Adicione a Universidade</TitleAdd>
                <UniForm 
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    universidade={universidade}
                    />
            </MainAdd>       
        </ContainerAdd>  
    )
} 
export default Adicionar   