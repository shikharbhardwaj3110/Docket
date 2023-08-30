import { styled } from "styled-components";
import { NoteContainerProps } from "../components/NoteItem/NoteItem";

export const NoteGrid = styled.div`
    gap: 20px;
    padding-top : 2.5rem;
    padding-bottom : 2.5rem;
`

export const NoteContainer = styled.div<{ bgColor?: string }>`
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
    cursor : pointer;
`

export const NoteDate = styled.span`
    font-weight : 400;
    font-family: 'Poppins', sans-serif;
    color : #454242ab;
`

export const HeaderTitle = styled.h4`
    font-family: 'Rubik', sans-serif;
    font-size : 4rem;
   
    @media (max-width: 768px) {
        font-size : 2.5rem;
      }
`

export const HeaderContainer = styled.div`
      display : flex;
      align-items : center;
      justify-content : space-between;
`

export const NewNoteBtnContainer = styled.div`
      display : flex;
      padding : 0.4rem;
      background-color : #31291D;
      align-items : center;
      justify-content : center;
      cursor : pointer;
      border-radius : 30px;

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

export const NoteDataInput = styled.textarea<{ bgColor?: string }>`
      border : none;
      outline : none;
      font-family: 'Poppins', sans-serif;
      font-weight : 500;
      white-space : wrap;
      overflow: hidden; 
      word-break : break-all;
      text-overflow: ellipsis;
      padding-bottom : 0rem;
      height : 8rem;
      width : 100%;
      resize : none;
      overflow : hidden;
      background-color : ${props => props.bgColor};
      @media (max-width: 768px) {
          height : 5rem;
        }
`

export const SearchBarGrid = styled.div`
        margin-top : 2rem;
        margin-bottom : 2rem;
`

export const SearchBarContainer = styled.div`
        display : flex;
        border : 1px solid whitesmoke;
        background-color : whitesmoke;
        align-items : center;
        border-radius : 10px;
        width : 40%;
        @media (max-width: 768px) {
          width : 100%;
        }
        @media (min-width: 769px) and (max-width : 1000px) {
          width : 50%;
        }
`

export const SearchBarInput = styled.input`
        outline : none;
        border : none;
        padding-left : 0.5rem;
        background-color : whitesmoke;
        padding-top : 0.8rem;
        padding-bottom : 0.8rem;
        font-size : 1.1rem;
        flex-grow : 1;
        color : 
        &::placeholder {
          color: #999;
          font-size : 1.1rem;
        }
`

export const NewNoteModalInput = styled.textarea<{bgColor? : string}>`
        outline : none;
        border : none;
        font-family: 'Poppins', sans-serif;
        padding-top : 1rem;
        width : 100%;
        height : 12rem;
        background-color : ${props => props.bgColor};
        resize : none;
        ::placeholder {
          color: black;
        }
`

export const ModalBody = styled.div<{bgColor? : string}>`
        position : relative;
        flex : 1 1 auto;
        background-color : ${props => props.bgColor};
        border-bottom-left-radius : 10px;
        border-bottom-right-radius : 10px;
`

export const ModalColorButton = styled.button<{bgColor? : string, marginLeft? : string}>`
        background-color : ${props => props.bgColor};
        border-radius : 30px;
        height : 1rem;
        width : 1rem;
        margin-left : ${props => props.marginLeft};
        border : none;
`