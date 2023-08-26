import { createSlice } from "@reduxjs/toolkit";

export interface Note {
    id : number,
    text : string,
    starred : boolean,
    date : Date,
    color : string
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
            date : new Date('2023/02/03'),
            color : '#C6D947'
        },
        {
            id : 2,
            text : "This application might come assd  asd a sa ds a s  in handy  asd  sdas s ad as sad dssssssssssssssssssssssssssssssssssssssssssssssssssss s asd d wdas  sadwawd asdwasd awdasd dwa asdww  sadwwa  asdwas dawsxd d dwas  dwasd wa:) cas  sa as d aas ds.",
            starred : true,
            date : new Date('2023/04/03'),
            color : '#F3542A'
        },
        {
            id : 3,
            text : "Shopping.",
            starred : true,
            date : new Date('2023/04/03'),
            color : '#7049F0'
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
