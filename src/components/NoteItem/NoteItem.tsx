import { styled } from "styled-components";
import { Note } from "../../features/notes/noteSlice"

interface NoteProps {
    note: Note
}

const NoteContainer = styled.div`
    background-color : #F5972C;
    border-radius : 15px;
    padding : 5rem;
    display : flex;
`

const NoteItem: React.FC<NoteProps> = (props: NoteProps) => {
    console.log(props.note);
    return (
        <NoteContainer>
            <span>NoteItem</span>
        </NoteContainer>

    )
}

export default NoteItem