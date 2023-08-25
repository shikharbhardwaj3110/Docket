import { styled } from "styled-components";
import { NoteContainerProps } from "../components/NoteItem/NoteItem";

export const NoteGrid = styled.div`
    display : grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
`

export const NoteContainer = styled.div<{bgColor? : string}>`
    background-color : ${props => props.bgColor};
    border-radius : 15px;
    padding-left : 2rem;
    padding-right : 2rem;
    padding-top : 2rem;
    padding-bottom : 2rem;
    height : 10rem;
    width : 12rem;
   
`
export const AppContainer = styled.div`
    margin : 4rem;
`
export const NoteData = styled.span`
    font-family: 'Poppins', sans-serif;
`