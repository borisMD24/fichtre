import React from 'react';
import AddNotesBtn from '../addNotesBtn/index'
import NoteDetails from '../noteDetails';

const NotesList = (props) => {
    const notes = props.notes?.map(note => {
        return (<div className={"note"} onClick={()=>{props.changeCurrentNote(note)}}>
            <div className={"title"}>
                {note.title}
            </div>
            <div className={"content"}>
                {note.content}
            </div>
        </div>);
    })
    return (
        <div className={"notes"}>
            <AddNotesBtn changeCurrentNote={props.changeCurrentNote}/>
            {notes &&
            notes
            ||
            "pas de notes enregistrees"
            }
        </div>
    );
}

export default NotesList;