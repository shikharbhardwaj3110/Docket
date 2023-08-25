import { Note } from "../../features/notes/noteSlice";
import { NoteContainer, NoteData } from "../../styles/NoteStyles";

interface NoteProps {
    note: Note
}

const NoteItem: React.FC<NoteProps> = (props: NoteProps) => {
    console.log(props.note);
    return (
        <NoteContainer>
            <NoteData>{props.note.text}</NoteData>
        </NoteContainer>

    )
}

export default NoteItem