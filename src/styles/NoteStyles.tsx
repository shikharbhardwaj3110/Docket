import { styled } from "styled-components";

export const NoteGrid = styled.div`
    display : grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
`
export const NoteContainer = styled.div`
    background-color : #F3542A;
    border-radius : 15px;
    padding-left : 2rem;
    padding-right : 2rem;
    padding-top : 2rem;
    padding-bottom : 2rem;
    height : 8rem;
   
`
export const AppContainer = styled.div`
    padding : 4rem;
`
export const NoteData = styled.span`
    font-family: 'Poppins', sans-serif;
`