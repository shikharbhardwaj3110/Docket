import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { insertNote } from './features/notes/noteSlice';
import { NoteData, Note } from './features/notes/noteSlice';
import NoteItem from './components/NoteItem/NoteItem';
import { NoteGrid, AppContainer } from './styles/NoteStyles';

function App() {

  const notes = useSelector((state: NoteData) => state.notes.notes);

  const dispatch = useDispatch();
  console.log(notes);

  const RenderNotes: React.FC = () => {
    return (
      <div style={{ display: 'flex', gap: '2rem', flexWrap : 'wrap', justifyContent : 'flex-start' }}>
        {
          notes.map((note: Note) => {
            return (
              <NoteItem note={note} />
            )
          })
        }
      </div>
    )
  }

  return (
    <AppContainer>
      <NoteGrid>
        <RenderNotes />
      </NoteGrid>
    </AppContainer>
  )
}

export default App
