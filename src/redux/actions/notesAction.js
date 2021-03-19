import { ADD_NOTE, UPDATE_NOTE, ACTIVE_NOTE, UPDATE_TITLE, DELETE_NOTE } from '../constants'

export const addNote = note => {
    return {
        type: ADD_NOTE,
        payload: note
    }
}

export const updateNote = body => {
    return {
        type: UPDATE_NOTE,
        payload: body
    }
}

export const activeNote = id => {
    return {
        type: ACTIVE_NOTE,
        payload: id
    }
}

export const updateNoteTitle = title =>{
    return {
        type: UPDATE_TITLE,
        payload: title
    }
}

export const deleteNote = id =>{
    return {
        type: DELETE_NOTE,
        payload: id
    }
}

