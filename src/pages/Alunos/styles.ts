import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1.2rem;
    margin-left: -2.5rem;
`;

const MainAlunos = styled.main`
    flex: 1;
    border: 1px solid;
    height: 75vh;
    width: 75rem;
    padding: 1rem;
    box-shadow: 10px 10px 10px #373737;
`;

const TitleMain = styled.h1`
    margin-top: 2rem;
    text-align: center;
`;

const AlunosTable = styled.table`
    border: 1px solid;
    width: 75rem;
    margin-left: .1rem;
    margin-bottom: 2rem;
    padding-left: .5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    box-shadow: 10px 10px 10px #373737;
`;

const TableTopic = styled.thead`
    margin-top: 10rem;
`

const TableTitle = styled.th`
    gap: 30rem;
    margin-top: 10rem;
`

const TableBody = styled.tbody`
    margin-top: 5rem;
`

const TitleTd = styled.td`
    border: 1px solid;
    text-align: center;
    width: auto;
`
const ContainerAdd = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1.2rem;
    margin-left: -2.5rem;
`;

const MainAdd = styled.main`
    flex: 1;
    border: 1px solid;
    height: 75vh;
    width: 75rem;
    padding: 1rem;
    box-shadow: 10px 10px 10px #373737;
`;

const TitleAdd = styled.h1`
    margin-top: 2rem;
    margin-left: 25rem;    
`;

const FormAdd = styled.div`
    border: 1px solid;
    width: 65rem;
    margin-left: 4rem;
    margin-bottom: 2rem;
    padding-left: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    box-shadow: 10px 10px 10px #373737;
`

const LabelAdd = styled.label`
    font-weight: bold;
    align-items: center;
    margin-right: 1rem;
`;

const InputAdd = styled.input`
    gap: 1rem;
    width: 60vh;
    margin-top: .5rem;
    margin-left: -.4rem;
    height: 2rem;
    margin-right: 1rem;
`;

const InputAdd2 = styled.input`
    gap: 1rem;
    width: 50vh;
    margin-top: .5rem;
    height: 2rem;
    margin-right: 1rem;
    margin-left: -.2rem;
`;

const InputAdd3 = styled.input`
    gap: 1rem;
    width: 60vh;
    margin-top: .5rem;
    height: 2rem;
    margin-right: 1.5rem;
    margin-left: -.5rem;
`;

const InputAdd4 = styled.input`
    gap: 1rem;
    width: 27vh;
    margin-top: .5rem;
    height: 2rem;
    margin-right: 1.5rem;
    
`;



export { 
    Container, 
    MainAlunos, 
    TitleMain, 
    AlunosTable, 
    TableTopic, 
    TableTitle, 
    TableBody, 
    TitleTd, 
    ContainerAdd,
    MainAdd,
    TitleAdd,
    FormAdd,
    LabelAdd,
    InputAdd,
    InputAdd2,
    InputAdd3,
    InputAdd4,
};
  
