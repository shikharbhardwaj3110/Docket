import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { insertNote } from './features/notes/noteSlice';
import { NoteData, Note } from './features/notes/noteSlice';
import NoteItem from './components/NoteItem/NoteItem';
import { NoteGrid } from './styles/NoteStyles';

function App() {

  const notes = useSelector((state: NoteData) => state.notes.notes);

  const dispatch = useDispatch();
  console.log(notes)

  const RenderNotes: React.FC = () => {
    return (
      <div>
        {notes.map((note: Note) => {
          return (
            <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
              <NoteItem note={note} />
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <NoteGrid>
        <RenderNotes/>
      </NoteGrid>

    </>
  )
}

export default App
