import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { updateNote, updateNoteTitle } from '../redux/actions'
import ReactMarkdown from 'react-markdown'

const mapStateToProps = state => {
    let notes = [...state.Notes.noteData]
    notes = notes.filter(n=>n.id === state.Notes.active)[0]

    return {
        note: notes,
        active: state.Notes.active,
        allnotes: state.Notes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateNote: body => dispatch(updateNote(body)),
        updateNoteTitle: title=> dispatch(updateNoteTitle(title))
    }
}

const TextContainer = (props) => {
    // console.log('body', props.note)
    const [preview, setPreview] = useState(false)
    const [currBody, setCurrBody] = useState('')
    const [currTitle, setCurrTitle] = useState('')
    useEffect(()=>{
        setCurrBody(typeof props.note !== 'undefined' ? props.note.body : '')
        setCurrTitle(typeof props.note !== 'undefined' ? props.note.title : '')
    },[props.active])

    useEffect(()=>{
        props.updateNote(currBody)
        props.updateNoteTitle(currTitle)
        localStorage.setItem('notesave', JSON.stringify(props.allnotes))
    }, [currBody, currTitle])
    
    return (
        <section className="TextContainer">
            <header>
                <div className="edit column">
                    <i className={preview ? "fas fa-edit" : "fas fa-edit active"} onClick={()=>setPreview(false)}></i>
                </div>
                <div className="preview column">
                    <i className={preview ? "fas fa-book-reader active" : "fas fa-book-reader"} onClick={()=>setPreview(true)}></i>
                </div>
            </header>
            { preview ?
                <ReactMarkdown className="inputArea markdownBox">{props.note.body}</ReactMarkdown> :
            
                <div className="inputArea">
                    {(typeof props.note !== 'undefined') ? <>
                    <input type="text" name="title" placeholder="Title" value={currTitle} onChange={e=>setCurrTitle(e.target.value)}/>
                    <textarea name="textarea" id="textarea" placeholder="Write your Notes"
                        value={currBody}
                        onChange={e=>setCurrBody(e.target.value)}></textarea>
                     </>: <h1 className="no-note-selected">Please Select any note</h1>
                    }
                </div>

            }
        </section>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(TextContainer)