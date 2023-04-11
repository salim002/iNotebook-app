import noteContext from "./NoteContext";
import {useState} from "react";

const NoteState = (props)=>{
    const notesInitial = [
      {
        "_id": "64313e35a45873578ee2930e",
        "user": "643022068ec37d1003a16ecd",
        "title": "New note",
        "description": "Please access the playlist",
        "tag": "Youtube",
        "date": "2023-04-08T10:13:09.169Z",
        "__v": 0
      },
      {
        "_id": "64357a18560424130fd6dfdd2",
        "user": "643022068ec37d1003a16ecd",
        "title": "New note-2",
        "description": "REMAINDER: Please access the playlist",
        "tag": "Youtube.com",
        "date": "2023-04-11T15:17:44.280Z",
        "__v": 0
      },
      {
        "_id": "64357a185604241fg30fd6dfd2",
        "user": "643022068ec37d1003a16ecd",
        "title": "New note-2",
        "description": "REMAINDER: Please access the playlist",
        "tag": "Youtube.com",
        "date": "2023-04-11T15:17:44.280Z",
        "__v": 0
      },
      {
        "_id": "64313e35a4587gh3578ee2930e",
        "user": "643022068ec37d1003a16ecd",
        "title": "New note",
        "description": "Please access the playlist",
        "tag": "Youtube",
        "date": "2023-04-08T10:13:09.169Z",
        "__v": 0
      },
      {
        "_id": "64357a1856042ef4130fd6dfd2",
        "user": "643022068ec37d1003a16ecd",
        "title": "New note-2",
        "description": "REMAINDER: Please access the playlist",
        "tag": "Youtube.com",
        "date": "2023-04-11T15:17:44.280Z",
        "__v": 0
      },
      {
        "_id": "64357a185604hb24130fd6dfd2",
        "user": "643022068ec37d1003a16ecd",
        "title": "New note-2",
        "description": "REMAINDER: Please access the playlist",
        "tag": "Youtube.com",
        "date": "2023-04-11T15:17:44.280Z",
        "__v": 0
      }
    ]

    const [notes, setNotes] = useState(notesInitial);

    // Add a Note
    const addNote = (title, description, tag)=>{
      // TODO: API Call
      console.log("Adding a new note");
      const note = {
        "_id": "64313e35a45873578ee2930e",
        "user": "643022068ec37d1003a16ecd",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2023-04-08T10:13:09.169Z",
        "__v": 0
      };
      setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = (id)=>{
      // TODO: API Call
      // console.log("Deleting the notes with id " + id);
      const newNotes = notes.filter((note)=>{return note._id!==id});
      setNotes(newNotes);
    }

    // Edit a Note
    const editNote = (id, title, description, tag)=>{
      
    }

    return(
        <noteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;