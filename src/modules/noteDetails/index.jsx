import React from 'react';
import Showdown from 'showdown';

const NoteDetails = (props) => {
    const converter = new Showdown.Converter();
    const [noteTitle, ChangeNoteTitle] = React.useState()
    const [noteContent, ChangeNoteContent] = React.useState()
    const HandleOnChangeTitle = (e) => {
        console.log(e.target.value);
        
        props.note && props.changeCurrentNote({title : e.target.value, content : props.note.content})
        ||
        ChangeNoteTitle(e.target.value);
    }
    const HandleOnChangeContent = (e) => {
        props.note && props.changeCurrentNote({title : props.note.title, content : e.target.value})
        ||
        ChangeNoteTitle(e.target.value)
    }
    React.useEffect(()=>{
        props.note && ChangeNoteTitle(props.note.title);
        props.note && ChangeNoteContent(props.note.content);
    })
   return (
        <div className={"current"}>
                <div className="new">
                    <div className="preview">
                        <div className="title">
                            {noteTitle}
                            </div>
                        <div className="content">
                            {noteContent}
                        </div>
                    </div>
                    <div className="text">
                        <input type="text" value={noteTitle} onChange={HandleOnChangeTitle}/>
                        <textarea className="textarea" value={noteContent} onChange={HandleOnChangeContent}></textarea>
                        <button className="submit-btn" onClick={()=>{props.submitNote()}}> Enregistrer {props.note && <span>les changements</span> || <span>la note</span> } </button>
                    </div>
                </div>
        </div>
    );
}

export default NoteDetails;