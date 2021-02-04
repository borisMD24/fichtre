import './App.scss';
import React, { useEffect } from 'react';
import NotesList from './modules/notesList/index'
import NoteDetails from './modules/noteDetails/index'

function App() {
  const unparseNote = () => {
    let storage = localStorage["notePad"].split("|")
    console.log(storage);
    if (storage[0]){
      let r = [];
      console.log(storage);
      storage.forEach(note => {r.push(JSON.parse(note))})
      console.log(r);
      return r;
    }
  }
  let [notes, addNotes] = React.useState(unparseNote());
  let [currentNote, changeCurrentNote] = React.useState({title : "titre de la nouvelle note", content : "contenu de la nouvelle note", nbr: Math.random()});
  React.useEffect(() => {
    addNotes(unparseNote());
  }, [])
  const handleCurrentNoteChange = (note) => {
    changeCurrentNote(currentNote = note);
    console.log(currentNote);
  }
  const parseNote = (note) => {
    let nbr;
    if(currentNote.nbr){
      nbr = currentNote.nbr
    } else {
      nbr = Math.random();
    }
    return (`{"title" : "${currentNote.title}", "content" : "${currentNote.content}", "nbr" : "${nbr}"}`);
  }
  const avoidDuplicate = (parsedNote, storage) => {
    storage = storage.split("|");
    console.log(storage);
    let json = JSON.parse(parsedNote);
    storage.forEach(note => {
      console.log(JSON.parse(note));
      if(json.nbr == note.nbr){
        note = parsedNote;
        parsedNote = "";
      }
    });
    console.log(parsedNote);
    storage = storage.join("|")+ "|" + parsedNote;
    console.log(storage);
    return storage;
  }
  const submitNote = () => {
    let parsedNote = parseNote(currentNote)
    localStorage["notePad"] += "|" +  parsedNote;
    notes && addNotes(notes = notes.push(currentNote))
    ||
    addNotes(notes = [currentNote]);
  }
  return (
    <div className={"notes-container"}>
      <NotesList notes={notes} changeCurrentNote={handleCurrentNoteChange}/>
      <NoteDetails note={currentNote} changeCurrentNote={handleCurrentNoteChange} submitNote={submitNote}/>
    </div>
  );
}

export default App;
