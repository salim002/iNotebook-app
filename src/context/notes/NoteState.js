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
        "_id": "64357a18560424130fd6dfd2",
        "user": "643022068ec37d1003a16ecd",
        "title": "New note-2",
        "description": "REMAINDER: Please access the playlist",
        "tag": "Youtube.com",
        "date": "2023-04-11T15:17:44.280Z",
        "__v": 0
      },
      {
        "_id": "64357a18560424130fd6dfd2",
        "user": "643022068ec37d1003a16ecd",
        "title": "New note-2",
        "description": "REMAINDER: Please access the playlist",
        "tag": "Youtube.com",
        "date": "2023-04-11T15:17:44.280Z",
        "__v": 0
      },
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
        "_id": "64357a18560424130fd6dfd2",
        "user": "643022068ec37d1003a16ecd",
        "title": "New note-2",
        "description": "REMAINDER: Please access the playlist",
        "tag": "Youtube.com",
        "date": "2023-04-11T15:17:44.280Z",
        "__v": 0
      },
      {
        "_id": "64357a18560424130fd6dfd2",
        "user": "643022068ec37d1003a16ecd",
        "title": "New note-2",
        "description": "REMAINDER: Please access the playlist",
        "tag": "Youtube.com",
        "date": "2023-04-11T15:17:44.280Z",
        "__v": 0
      }
    ]

      const [notes, setNotes] = useState(notesInitial);
      

    return(
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;