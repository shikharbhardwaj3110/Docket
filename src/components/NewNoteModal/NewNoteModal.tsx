import { colors } from "../../styles/colorPalette";
import { useState, useRef, useEffect } from 'react';
import {
    NewNoteModalInput,
    ModalBody,
    ModalColorButton
} from "../../styles/NoteStyles";
import { AiFillRightCircle } from "react-icons/ai";
import { generateId } from "../../utils/idGenerator";
import { INote, insertNote } from "../../features/notes/noteSlice";
import { useDispatch } from 'react-redux';


interface INewNoteModalProps {
    isModalOpen: boolean
};

const NewNoteModal: React.FC<INewNoteModalProps> = ({ isModalOpen }) => {

    const [currentColor, setCurrentColor] = useState<string>(colors[0]);
    const [noteInput, setNoteInput] = useState<string>('');
    const inputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (isModalOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isModalOpen])

    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (noteInput.trim() == '') {
            return;
        }
        const newNote: INote = {
            id: generateId(),
            text: noteInput,
            starred: false,
            date: new Date(),
            color: currentColor
        };

        dispatch(insertNote(newNote));

    }

    return (
        <div
            className="modal fade"
            id="newNoteModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div
                    className="modal-content"
                    style={{ backgroundColor: currentColor }}
                >
                    <div className="modal-header" style={{ backgroundColor: currentColor, opacity: 0.8 }}>
                        <h1 className="modal-title fs-5" id="exampleModalLabel">New Note</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <ModalBody bgColor={currentColor} className="modal-body">
                        <NewNoteModalInput
                            bgColor={currentColor}
                            autoFocus={true}
                            ref={inputRef}
                            value={noteInput}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => { setNoteInput(e.target.value) }}
                            placeholder="Your note here..."
                        />
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="px-3 py-1 rounded" style={{ backgroundColor: '#f0f0f04a' }}>
                                {
                                    colors.map((color, index) => {
                                        return (
                                            <>
                                                <ModalColorButton
                                                    bgColor={color}
                                                    onClick={() => { setCurrentColor(color) }}
                                                    marginLeft={`${!index ? '0' : '1rem'}`}
                                                    key={index}
                                                />
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <AiFillRightCircle
                                size={38}
                                color="#26262675"
                                style={{ cursor: 'pointer' }}
                                onClick={() => { handleSubmit() }}
                            />
                        </div>
                    </ModalBody>
                </div>
            </div>
        </div>
    )
}

export default NewNoteModal;