import * as React from 'react';
import Button from '../../Button/button';
import IAlunos from '../../../models/aluno';

import {
    FormAdd,
    LabelAdd,
    InputAdd,
    InputAdd2,
    InputAdd3,
    InputAdd4,
} from "../../../pages/Alunos/styles"


interface IAlunosFormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    aluno: IAlunos;
}

function AlunosForm(props: IAlunosFormProps) {
    const {handleSubmit, handleChange, aluno } = props;
    return ( 
        <form onSubmit={(e) => handleSubmit (e)}>
            <FormAdd>
                <LabelAdd htmlFor="nome">
                    Nome
                </LabelAdd>

                <InputAdd 
                    id="nome"
                    name="nome"
                    placeholder="Digite o nome do Aluno"
                    type="text"
                    value={aluno.nome}
                    onChange={(e) => handleChange(e)}
                    required
                ></InputAdd>
                    
                <LabelAdd htmlFor="universidade">
                    Universidade
                </LabelAdd>

                <InputAdd2 
                    id="universidade"
                    name="universidade"
                    placeholder="Digite a Universidade vinculada ao aluno"
                    type="text"
                    value={aluno.universidade}
                    onChange={(e) => handleChange(e)}
                    required
                ></InputAdd2>
                    
                        <LabelAdd htmlFor="curso">
                            Curso
                        </LabelAdd>

                        <InputAdd3 
                            id="curso"
                            name="curso"
                            placeholder="Digite o nome do Curso"
                            type="text"
                            value={aluno.curso}
                            onChange={(e) => handleChange(e)}
                            required
                        ></InputAdd3>
    
                        <LabelAdd htmlFor="dataNascimento">
                            Data de Nascimento
                        </LabelAdd>

                        <InputAdd4 
                            id="dataNascimento"
                            name="dataNascimento"
                            placeholder="Digite a data de nascimento"
                            type="date"
                            value={aluno.dataNascimento}
                            onChange={(e) => handleChange(e)}
                            required
                        ></InputAdd4>

                        <Button
                            tema="Primario"
                            type="submit"
                            >ENVIAR
                        </Button>
                    </FormAdd>
                 </form>
    );
}

export default AlunosForm;