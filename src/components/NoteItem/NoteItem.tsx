import { Note } from "../../features/notes/noteSlice";
import {
    NoteContainer,
    NoteData,
    NoteEditContainer,
    NoteDataContainer,
    NoteEditBtn,
    NoteDate
} from "../../styles/NoteStyles";

import { AiFillStar } from "react-icons/ai";
import { getFormattedDate } from "../../utils/dateUtil";
import { BsFillPencilFill } from "react-icons/bs";

interface NoteProps {
    note: Note
};

export interface NoteContainerProps {
    bgColor: string
};

const NoteItem: React.FC<NoteProps> = (props: NoteProps) => {
    let { color, text, date } = props.note;
    let formattedDate = getFormattedDate(date);
    return (
        <NoteContainer bgColor={color}>
            <NoteDataContainer>
                <NoteData>{text}</NoteData>
            </NoteDataContainer>
            <NoteEditContainer>
                <NoteDate>
                    {formattedDate}
                </NoteDate>
                <NoteEditBtn>
                    <BsFillPencilFill color='white' size={20}>
                    </BsFillPencilFill>
                </NoteEditBtn>
            </NoteEditContainer>
        </NoteContainer>

    )
}

export default NoteItem;