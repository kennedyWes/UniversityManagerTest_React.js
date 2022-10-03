import React from "react";
import {
    Container, 
    MenuHome, 
    TitleMenu,
    TopicMenu,
    ItensMenu,
    
} from "./styles";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <Container>
          <MenuHome>
            <TitleMenu>
                <TopicMenu>
                    <Link to="/">HOME</Link>
                </TopicMenu>

                <TopicMenu>
                    <Link to="/universidades">UNIVERSIDADES</Link>
                </TopicMenu>

                <TopicMenu>
                    <Link to="/cursos">CURSOS</Link>   
                </TopicMenu>

                <TopicMenu>
                    <Link to="/professores">PROFESSORES</Link>        
                </TopicMenu>
                
                <TopicMenu>
                    <Link to="/alunos">ALUNOS</Link>        
                </TopicMenu>
                
                <TopicMenu>              
                    <Link to="/signin">LOGIN</Link>        
                </TopicMenu>
            </TitleMenu>
          </MenuHome>
        </Container>
    )
}

export default Menu;