import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { insertNote } from './features/notes/noteSlice';
import { NoteData, Note } from './features/notes/noteSlice';
import NoteItem from './components/NoteItem/NoteItem';
import { 
         NoteGrid,
         AppContainer,
         HeaderTitle,
         NoteItemsWrapper 
        } from './styles/NoteStyles';

function App() {

  const notes = useSelector((state: NoteData) => state.notes.notes);

  const dispatch = useDispatch();
  console.log(notes);

  const RenderNotes: React.FC = () => {
    return (

      <NoteItemsWrapper>
        {
          notes.map((note: Note) => {
            return (
              <NoteItem note={note} />
            )
          })
        }
      </NoteItemsWrapper>
    )
  }

  return (
    <AppContainer>
      <HeaderTitle>
        Notes
      </HeaderTitle>
      <NoteGrid>
        <RenderNotes />
      </NoteGrid>
    </AppContainer>
  )
}

export default App
