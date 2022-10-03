import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1.2rem;
    margin-left: -4rem;
`;

const MainCursos = styled.main`
    flex: 1;
    border: 1px solid;
    height: 75vh;
    width: 90%;
    padding: 1rem;
    box-shadow: 10px 10px 10px #373737;
`;

const CursosDiv = styled.div`
    margin-top: 2%;
    margin-left: 2%;
    border: 1px solid;
    width: 96%;
    padding: 1rem;
    box-shadow: 10px 10px 10px #373737;
`;

const TitleMain = styled.h1`
    margin-top: 2rem;
    text-align: center;
`;

const CursosTable = styled.table`
    width: 100%;
`;

const TableTopic = styled.thead`
    margin-top: 10rem;
`

const TableTitle = styled.th`
    gap: 2rem;
    margin-bottom: 2rem;
`

const TableBody = styled.tbody`
    margin-top: 5rem;
`

const TitleTd = styled.td`
    border: 1px solid;
    margin-top: 2rem;
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
    text-align: center;
`;

const FormAdd = styled.div`
    border: 1px solid;
    width: 65rem;
    margin-left: 3.5rem;
    margin-bottom: 2rem;
    padding-left: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    box-shadow: 10px 10px 10px #373737;
`

const LabelAdd = styled.label`
    display: inline-block;
    font-weight: bold;
    align-items: center;
    margin-right: 1rem;
`;

const InputAdd = styled.input`
    gap: 1rem;
    width: 37%;
    margin-top: .5rem;
    height: 2rem;
    margin-right: 2rem;
`;

const InputAdd2 = styled.input`
    gap: 1rem;
    width: 35%;
    margin-top: .5rem;
    height: 2rem;
    margin-right: 1.5rem;
`;

const InputAdd3 = styled.input`
    gap: 1rem;
    width: 53%;
    margin-top: .5rem;
    height: 2rem;
    margin-right: 1.5rem;
`;

const InputAdd4 = styled.input`
    gap: 1rem;
    width: 10vh;
    margin-top: .5rem;
    height: 2rem;
    margin-right: 1.5rem;
`;

export { 
    Container, 
    MainCursos, 
    CursosDiv,
    TitleMain, 
    CursosTable, 
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
    InputAdd4
};
