import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 2rem;
    flex-basis: 20%;
`;

const MenuHome = styled.aside`
    flex-basis: 65%;
    gap: 1rem;
    margin-top: 1.2rem;
    margin-left: .7rem;
    border: 1px solid;
    height: 97%;
    padding: 1rem;
    box-shadow: 10px 10px 10px #373737;
    
`;

const TitleMenu = styled.div`
    margin-top: 1rem;
    margin-left: 1rem;
`;

const TopicMenu = styled.ul`
    margin-left: -2.5rem;
    margin-top: .3rem;
    margin-bottom: 0.7rem;    
    & > a{
        color: #000;
        text-decoration: none;
      }
        & > a:hover {
          transform: scale(1.1);
          color: #C78C19;
        }
        & > a:active {
          color: #C78C19;
          text-decoration: underline;
        }
`;

const ItensMenu = styled.li`
    margin-left: 1rem;
    font-size: 13px;
    margin-top: .5rem;
`;


export {
    Container, MenuHome, TitleMenu, TopicMenu, ItensMenu, 
};