import { combineReducers } from 'redux'
import { NoteReducer } from './notesReducer'

export const rootReducer = combineReducers({
    Notes: NoteReducer
})