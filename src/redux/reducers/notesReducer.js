import { ADD_NOTE, UPDATE_NOTE, ACTIVE_NOTE, UPDATE_TITLE, DELETE_NOTE } from '../constants'

const init = () => {
    if (typeof localStorage.notesave !== "undefined"){
        return JSON.parse(localStorage.notesave)
    }
    return { noteData: [], active: ''}
}
const getDate = () =>{
    const d = new Date()
    return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
}
export const NoteReducer = (state = init() , action) => {
    switch(action.type){
        case ADD_NOTE: return {
            ...state,
            noteData: [...state.noteData, action.payload]
        }
        case ACTIVE_NOTE: return {
            ...state,
            active: action.payload
        }
        case UPDATE_NOTE:
            let notes = state.noteData
            for(let i=0;i<notes.length; i++){
                if(notes[i].id === state.active){
                    notes[i].body = action.payload
                    notes[i].lastupdate = getDate()
                }
            }
            return {
                ...state,
                noteData: notes
        }
        case UPDATE_TITLE:
            let newNote = state.noteData
            for(let i=0;i<newNote.length; i++){
                if(newNote[i].id === state.active){
                    newNote[i].title = action.payload
                    newNote[i].lastupdate = getDate()
                }
            }
            return {
                ...state,
                noteData: newNote
        }
        case DELETE_NOTE: 
        let allNote = state.noteData
        allNote = allNote.filter(n => n.id !== action.payload)
        return{
            ...state,
            noteData : allNote
        }

        default: return state;
    }
}