import { Note } from "../../features/notes/noteSlice";
import { NoteContainer, NoteData } from "../../styles/NoteStyles";

interface NoteProps {
    note: Note
}

export interface NoteContainerProps {
    bgColor : string
}

const NoteItem: React.FC<NoteProps> = (props: NoteProps) => {
    let {color, text} = props.note;
    return (
        <NoteContainer bgColor={color}>
            <NoteData>{text}</NoteData>
        </NoteContainer>

    )
}

export default NoteItem