import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface INote {
    id : string,
    text : string,
    starred : boolean,
    date : string,
    color : string
};

interface INotesArray {
    notes : INote[];
}

export interface INoteData {
    notes : INotesArray
}

const initialState : INotesArray = {
    notes : [
        {
            id : '0c22b52b-30a1-4243-8a4a-7353053ad8ff',
            text : "This is my first note.",
            starred : false,
            date : '03-02-2023',
            color : '#C6D947'
        },
        {
            id : 'b09c6886-cb8c-4d44-b91e-b6a4f8186cea',
            text : "This application might come in handy :).",
            starred : true,
            date : '03-04-2023',
            color : '#F3542A'
        },
        {
            id : 'c09f6226-cb8c-4d44-b91e-b6a4f8186cea',
            text : "Shopping.",
            starred : true,
            date : '03-04-2023',
            color : '#7049F0'
        },
        {
            id : 'e69f6289-cb4d-4d44-b91e-b6a4f8186csd',
            text : "Go to gym.",
            starred : true,
            date : '12-02-2023',
            color : '#F5972C'
        },
        {
            id : '0c22b52b-48e1-4243-9e0e-7353053ad8ff',
            text : "Blank.",
            starred : true,
            date : '15-02-2023',
            color : '#0AA4F6'
        }
    ]
};

export const noteSlice = createSlice({
    name : 'notes',
    initialState,
    reducers : {
        insertNote : (state, action : PayloadAction<INote>) => {
            const newNote = action.payload;
            console.log("Note obj recvd at reducer : ",newNote)
            state.notes.push(newNote);
            console.log("Curr redux store state : ",state);
            return state;
        }
        // increment : (state) => {
        //     state.count += 1;
        // },
        // decrement : (state) => {
        //     state.count -= 1;
        // },
        // reset : (state) => {
        //     state.count = 0;
        // },
        // incrementByAmount : (state, action) => {
        //     state.count += action.payload;
        // }
    }
});

export const {insertNote} = noteSlice.actions;
export default noteSlice.reducer;
