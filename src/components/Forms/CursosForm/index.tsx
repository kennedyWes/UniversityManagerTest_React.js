import Button  from "../../Button/button";
import React from "react";
import ICurso from "../../../models/curso";

import {
    FormAdd,
    LabelAdd,
    InputAdd,
    InputAdd2,
    InputAdd3,
    InputAdd4
} from "../../../pages/Cursos/styles"


interface ICursosProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    curso: ICurso;
}

function CursosForm(props: ICursosProps) {
    const {handleSubmit, handleChange, curso } = props;
        return (
            <form onSubmit={(e) => handleSubmit (e)}>
                <FormAdd>
                    <LabelAdd htmlFor="nome">
                        NOME:
                    </ LabelAdd>
    
                    <InputAdd 
                        id="nome"
                        name="nome"
                        placeholder="Digite o nome do Curso"
                        type="text"
                        value={curso.nome}
                        onChange={(e) => handleChange(e)}
                        required
                    ></InputAdd>

                    <LabelAdd htmlFor="nome">
                        UNIVERSIDADE:
                    </LabelAdd>

                    <InputAdd2 
                        id="universidade"
                        name="universidade"
                        placeholder="Digite em qual Universidade se encontra o Curso"
                        type="text"
                        value={curso.universidade}
                        onChange={(e) => handleChange(e)}
                        required
                    ></InputAdd2>

                    <LabelAdd htmlFor="disciplinas">
                        DISCIPLINAS:
                    </LabelAdd>

                    <InputAdd3 
                        id="disciplinas"
                        name="disciplinas"
                        placeholder="Digite as disciplinas deste Curso"
                        type="text"
                        value={curso.disciplinas}
                        onChange={(e) => handleChange(e)}
                        required
                    ></InputAdd3>

                    <LabelAdd htmlFor="duracao">
                        DURAÇÃO:
                    </LabelAdd>

                    <InputAdd4 
                        id="duracao"
                        name="duracao"
                        placeholder="Qual é a duração do Curso"
                        type="number"
                        value={curso.duracao}
                        onChange={(e) => handleChange(e)}
                        required
                    ></InputAdd4>
       
                    <Button
                        type="submit"
                        tema="Primario"
                        >ENVIAR
                    </Button>
                </FormAdd>
            </form>
    )
}

export default CursosForm;