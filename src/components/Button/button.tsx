import React from 'react';
import { DivButton, Botao } from './styles';

export interface IButtonProps {
    type?: "button" | "submit" | "reset" | undefined, 
    children?: React.ReactNode,
    onClick?: () => void,
    tema?: "Primario" | undefined
}

function Button ({ type, children, tema, onClick }: IButtonProps){
        return (
            <Botao 
                type={type} 
                onClick={onClick}
                tema={tema}
                >
                {children}
            </Botao>
        )
    }


export default Button;