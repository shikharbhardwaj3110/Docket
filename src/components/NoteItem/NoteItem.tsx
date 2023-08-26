import { Note } from "../../features/notes/noteSlice";
import {
    NoteContainer,
    NoteData,
    NoteEditContainer,
    NoteDataContainer,
    NoteEditBtn,
    NoteDate,
    NoteDataInput,
} from "../../styles/NoteStyles";
import { AiFillStar } from "react-icons/ai";
import { getFormattedDate } from "../../utils/dateUtil";
import { BsFillPencilFill } from "react-icons/bs";
import { useState } from "react";

interface NoteProps {
    note: Note
};

export interface NoteContainerProps {
    bgColor: string
};

const NoteItem: React.FC<NoteProps> = (props: NoteProps) => {

    let { color, text, date } = props.note;
    let formattedDate = getFormattedDate(date);

    const [isEditing, setIsEditing] = useState(false);
    const [textInput, setTextInput] = useState(text);

    return (
        <NoteContainer bgColor={color}>
            <NoteDataContainer>
                {
                    isEditing ?   
                    <NoteDataInput
                        value={textInput}
                        onChange={(e) => {setTextInput(e.target.value)}}
                        onBlur={() => {setIsEditing(false)}}
                        bgColor={color}
                        autoFocus={true}
                    />
                    :
                    <NoteData>
                        {textInput}
                    </NoteData>
                }
            </NoteDataContainer>
            <NoteEditContainer>
                <NoteDate>
                    {formattedDate}
                </NoteDate>
                <NoteEditBtn onClick={() => {setIsEditing(true)}}>
                    <BsFillPencilFill 
                        color='white' 
                        size={20}
                    />
                </NoteEditBtn>
            </NoteEditContainer>
        </NoteContainer>

    )
}

export default NoteItem;