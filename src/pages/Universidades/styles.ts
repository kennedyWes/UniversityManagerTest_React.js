import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1.2rem;
    margin-left: -4rem;
`;

const MainUni = styled.main`
    flex: 1;
    border: 1px solid;
    height: 75vh;
    width: 90%;
    padding: 1rem;
    box-shadow: 10px 10px 10px #373737;
`;

const UniDiv = styled.div`
    margin-top: 2%;
    padding-left: 2%;
    border: 1px solid;
    width: 100%;
    padding: 1rem;
    box-shadow: 10px 10px 10px #373737;
`;

const TitleMain = styled.h1`
    margin-top: 2rem;
    text-align: center;
`;

const UniTable = styled.table`
    width: 100%;
`;

const TableTopic = styled.thead`
    margin-top: 10rem;
`

const TableTitle = styled.th`
    gap: 2rem;
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
    margin-left: -4rem;
`;

const MainAdd = styled.main`
    flex: 1;
    border: 1px solid;
    height: 75vh;
    width: 70rem;
    padding: 1rem;
    box-shadow: 10px 10px 10px #373737;
`;

const TitleAdd = styled.h1`
    margin-top: 2rem;
    text-align: center; 
`;

const FormAdd = styled.div`
    border: 1px solid;
    width: 95%;
    margin-left: 2rem;
    margin-bottom: 2rem;
    padding-left: .5rem;
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
    width: 47vh;
    height: 2rem;
    margin-top: .8rem;
    margin-right: 2rem;
`;

export { 
    Container, 
    MainUni, 
    UniDiv,
    TitleMain, 
    UniTable, 
    TableTopic, 
    TableTitle, 
    TableBody, 
    TitleTd, 
    ContainerAdd,
    MainAdd,
    TitleAdd,
    FormAdd,
    LabelAdd,
    InputAdd
};
