import { createSlice } from "@reduxjs/toolkit";

export interface Note {
    id : number,
    text : string,
    starred : boolean,
    date : Date
};

interface NotesArray {
    notes : Note[];
}

export interface NoteData {
    notes : NotesArray
}

const initialState : NotesArray = {
    notes : [
        {
            id : 1,
            text : "This is my first note.",
            starred : false,
            date : new Date('25/08/2023')
        },
        {
            id : 2,
            text : "This application might come in handy :).",
            starred : true,
            date : new Date('22/08/2023')
        }
    ]
};

export const noteSlice = createSlice({
    name : 'notes',
    initialState,
    reducers : {
        insertNote : (state) => {
            console.log(state);
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
