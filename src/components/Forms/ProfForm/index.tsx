import Button  from "../../Button/button";
import React from "react";
import IProfessor from "../../../models/professor";

import {
    FormAdd,
    LabelAdd,
    InputAdd,
    InputAdd2,
    InputAdd3,
    InputAdd4,
    InputAdd5
} from "../../../pages/Professores/styles"


interface IProfessorProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    professor: IProfessor;
}

function ProfForm(props: IProfessorProps) {
    const {handleSubmit, handleChange, professor } = props;
        return (
            <form onSubmit={(e) => handleSubmit (e)}>
                <FormAdd>
                    <LabelAdd htmlFor="nome">
                        NOME:
                    </LabelAdd>

                    <InputAdd 
                        id="nome"
                        name="nome"
                        placeholder="Digite o nome do Professor"
                        type="text"
                        value={professor.nome}
                        onChange={(e) => handleChange(e)}
                        required
                    ></InputAdd>

                    <LabelAdd htmlFor="curso">
                        CURSO:
                    </LabelAdd>
                    
                    <InputAdd2 
                        id="curso"
                        name="curso"
                        placeholder="Digite o nome do Curso"
                        type="text"
                        value={professor.curso}
                        onChange={(e) => handleChange(e)}
                        required
                    ></InputAdd2>

                    <LabelAdd htmlFor="disciplina">
                        DISCIPLINA:
                    </LabelAdd>

                    <InputAdd3 
                        id="disciplina"
                        name="disciplina"
                        placeholder="Digite o nome da Disciplina"
                        type="text"
                        value={professor.disciplina}
                        onChange={(e) => handleChange(e)}
                        required
                    ></InputAdd3>

                    <LabelAdd htmlFor="salario">
                        SALÁRIO:
                    </LabelAdd>

                    <InputAdd4 
                        id="salario"
                        name="salario"
                        placeholder="Digite o salário do Professor"
                        type="number"
                        value={professor.salario}
                        onChange={(e) => handleChange(e)}
                        required
                    ></InputAdd4>

                    <LabelAdd htmlFor="dataNascimento">
                        DATA DE NASCIMENTO:
                    </LabelAdd>

                    <InputAdd5 
                        id="dataNascimento"
                        name="dataNascimento"
                        placeholder="Digite a data de nascimento do Professor"
                        type="text"
                        value={professor.dataNascimento}
                        onChange={(e) => handleChange(e)}
                        required
                    ></InputAdd5>

                    <Button
                        type="submit"
                        tema="Primario"
                        >ENVIAR
                    </Button>
                </FormAdd>
            </form>     
        )
    }

export default ProfForm;