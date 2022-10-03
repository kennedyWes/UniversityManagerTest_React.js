import * as React from 'react';
import Button from '../../Button/button';
import IUniversidade from '../../../models/universidade';

import {
    FormAdd,
    LabelAdd,
    InputAdd
} from "../../../pages/Universidades/styles"


interface IUniformProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    universidade: IUniversidade;
}

function UniForm(props: IUniformProps) {
    const {handleSubmit, handleChange, universidade } = props;
    return ( 
        <form onSubmit={(e) => handleSubmit (e)}>
                    <FormAdd>
                        <LabelAdd htmlFor="nome">
                            NOME:
                        </LabelAdd>
                      
                        <InputAdd 
                            id="nome"
                            name="nome"
                            placeholder="Digite o nome da Universidade"
                            type="text"
                            value={universidade.nome}
                            onChange={(e) => handleChange(e)}
                            required
                        ></InputAdd>

                        <LabelAdd htmlFor="nome">
                            LOCAL:
                        </LabelAdd>

                        <InputAdd 
                            id="local"
                            name="local"
                            placeholder="Digite o local da Universidade"
                            type="text"
                            value={universidade.local}
                            onChange={(e) => handleChange(e)}
                            required
                        ></InputAdd>

                        <Button
                            type="submit"
                            tema="Primario"
                            >ENVIAR
                        </Button>
                    </FormAdd>
                </form>
    );
}

export default UniForm;