import './App.css';
import { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { insertNote } from './features/notes/noteSlice';
import { INoteData, INote } from './features/notes/noteSlice';
import NoteItem from './components/NoteItem/NoteItem';
import {
  NoteGrid,
  AppContainer,
  HeaderTitle,
  NoteItemsWrapper,
  HeaderContainer,
  NewNoteBtnContainer
} from './styles/NoteStyles';
import { AiOutlinePlus } from "react-icons/ai";
import NewNoteModal from './components/NewNoteModal/NewNoteModal';
import SearchBar from './components/SearchBar/SearchBar';

function App() {

  const notes = useSelector((state: INoteData) => state.notes.notes);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const filteredNotes = notes.filter((note : INote) =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dispatch = useDispatch();

  const RenderNotes: React.FC = () => {
    return (

      <NoteItemsWrapper>
        {
          filteredNotes.map((note: INote) => {
            return (
              <NoteItem 
                note={note}
                key={note.id}  
              />
            )
          })
        }
      </NoteItemsWrapper>
    )
  }

  return (
    <AppContainer>
      <NewNoteModal
        isModalOpen={isModalOpen}
      />
      <HeaderContainer>
        <HeaderTitle>
          Notes
        </HeaderTitle>
        <NewNoteBtnContainer>
          <AiOutlinePlus
            size={35}
            color="white"
            data-bs-toggle="modal" 
            data-bs-target="#newNoteModal"
            onClick={ () => { setIsModalOpen(true) }}
          />
        </NewNoteBtnContainer>
      </HeaderContainer>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <NoteGrid>
        <RenderNotes />
      </NoteGrid>
    </AppContainer>
  )
}

export default App
