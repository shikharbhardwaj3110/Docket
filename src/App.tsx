import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { insertNote } from './features/notes/noteSlice';
import { NoteData, Note } from './features/notes/noteSlice';

function App() {
  
  const notes = useSelector((state : NoteData) => state.notes.notes);

  const dispatch = useDispatch();
  console.log(notes)

  return (
    <>
     Hello World
     {notes.map((note : Note) => {
      return (
        <div>
          {note.text}
        </div>
      )
     })}
    </>
  )
}

export default App
