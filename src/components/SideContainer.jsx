import React from 'react'
import uuid from 'react-uuid'
import { connect } from 'react-redux'
import { addNote, activeNote, deleteNote } from '../redux/actions'

const mapStateToProps = state => {
    return {
        notes: state.Notes.noteData,
        activenote: state.Notes.active,
        all: state.Notes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNote: note => dispatch(addNote(note)),
        activeNote: id => dispatch(activeNote(id)),
        deleteNote: id => dispatch(deleteNote(id))
    }
}

const getDate = () =>{
    const d = new Date()
    return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
}

const SideContainer = (props) => {
    const addNew = () => {
        props.addNote({
            id: uuid(),
            title: '',
            body: '',
            lastupdate: getDate()
        })
    }
    return (
        <section className="SideContainer">
            <header>
                <h1>Notes</h1>
                <i className="fas fa-plus-circle" onClick={addNew}></i>
            </header>
            <ul className="allNotes">
                {props.notes.map((note, i) =>
                    <li className={note.id === props.activenote ? "note active" : "note"} key={i} onClick={()=>props.activeNote(note.id)}>
                        <div className="title">
                            <h1>{note.title && note.title.substr(0, 21) + "..."}</h1>
                            <p>{note.lastupdate}</p>
                            <i className="fas fa-trash-alt" onClick={()=> props.deleteNote(note.id)}></i>
                        </div>
                        <p className="body">{note.body && note.body.substr(0, 48) + " ..."}</p>
                    </li>
                )}
            </ul>
        </section>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(SideContainer)