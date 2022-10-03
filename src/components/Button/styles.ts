import styled from "styled-components";
import { IButtonProps } from "./button";

const DivButton = styled.button`
    display: flex;
    flex-wrap: wrap;
    gap: .8rem;
    justify-content: center;
`;

const Botao = styled.button <IButtonProps>`
    display: inline-block;
    margin-right: .8rem;
    align-self: center;
    background: linear-gradient(#888888, #FFFFFF);
    border-radius: 10px;
    box-shadow: 3px 3px 3px #373737;
    color: #272626;
    cursor: pointer;
    font-size: 0.7rem;
    padding: .5rem;
    width: 5rem;
    height: 2rem;
    margin-top: .5rem;
    margin-bottom: 1rem;
    margin-left: .5rem;
    &:hover {
      transform: scale(1.05);
    }
    &:active {
      background-color: #7CA6B7;
      box-shadow: 5px 5px 5px #373737;
    }
    
    ${ (props) => props.tema === "Primario" && `
      background: rgba(124, 10, 39, 0.925);
      color: white;
      padding: .5rem;
      margin-left: .5rem;
      margin-right: .8rem;
    `}
`;

  export {
    DivButton, 
    Botao
  }