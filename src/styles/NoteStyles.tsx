import { styled } from "styled-components";
import { NoteContainerProps } from "../components/NoteItem/NoteItem";

export const NoteGrid = styled.div`
    gap: 20px;
`

export const NoteContainer = styled.div<{bgColor? : string}>`
    background-color : ${props => props.bgColor};
    border-radius : 15px;
    padding-left : 2rem;
    padding-right : 2rem;
    padding-top : 2rem;
    padding-bottom : 2rem;
    min-height : 15rem;
    width : 20rem; 

  @media (max-width: 768px) {
    /* Styles for screens with a maximum width of 768px */
    width: 100%;
    height: auto;
  }

`

export const AppContainer = styled.div`
    margin : 4rem;
    @media (max-width: 768px) {
        margin : 2rem;
      }
`
export const NoteData = styled.span`
    font-family: 'Poppins', sans-serif;
    font-weight : 500;
    white-space : wrap;
    overflow: hidden; 
    word-break : break-all;
    text-overflow: ellipsis;
    padding-bottom : 0rem;
`

export const NoteDataContainer = styled.div`
    height : 8rem;
    overflow : hidden;
    @media (max-width: 768px) {
        height : 5rem;
      }
`

export const NoteEditContainer = styled.div`
    margin-top : 3rem;
    display : flex;
    align-items : center;
    justify-content : space-between;
`

export const NoteEditBtn = styled.div`
    padding : 10px;
    height : 3rem;
    width : 3rem;
    border-radius : 30px;
    background-color : #31291D;
    display : flex;
    align-items : center;
    justify-content : center;
`

export const NoteDate = styled.span`
    font-weight : 400;
    font-family: 'Poppins', sans-serif;
    color : #454242ab;
`

export const HeaderTitle = styled.h4`
    font-family: 'Rubik', sans-serif;
    font-size : 4rem;
    margin-bottom : 3rem;
    @media (max-width: 768px) {
        font-size : 2.5rem;
      }
`

export const NoteItemsWrapper = styled.div`
      display : flex;
      gap : 2rem;
      flex-wrap : wrap;
      justify-content : flex-start;
      @media (max-width: 768px) {
        row-gap : 1rem;
      }
      
`