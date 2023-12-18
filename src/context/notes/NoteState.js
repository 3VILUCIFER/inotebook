import { useState } from "react";
import NoteContext from "./NoteContext";  

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "656604935f4204aa53b887fb0",
          "user": "6561a686ab648d2e34c2d97a",
          "title": "my title",
          "description": "i am devil of my world",
          "tag": "personal",
          "date": "2023-11-28T15:17:39.652Z",
          "__v": 0
        },
        {
          "_id": "6566049354204aa53fb887fb0",
          "user": "6561a686ab648d2e34c2d97a",
          "title": "my title",
          "description": "i am devil of my world",
          "tag": "personal",
          "date": "2023-11-28T15:17:39.652Z",
          "__v": 0
        }, {
          "_id": "656f6049354204aa53b887fb0",
          "user": "6561a686ab648d2e34c2d97a",
          "title": "my title",
          "description": "i am devil of my world",
          "tag": "personal",
          "date": "2023-11-28T15:17:39.652Z",
          "__v": 0
        }, {
          "_id": "6566049354204aa53b8f87fb0",
          "user": "6561a686ab648d2e34c2d97a",
          "title": "my title",
          "description": "i am devil of my world",
          "tag": "personal",
          "date": "2023-11-28T15:17:39.652Z",
          "__v": 0
        }, {
          "_id": "6566f049354204aa53b887fb0",
          "user": "6561a686ab648d2e34c2d97a",
          "title": "my title",
          "description": "i am devil of my world",
          "tag": "personal",
          "date": "2023-11-28T15:17:39.652Z",
          "__v": 0
        },
      ]

    const [notes, setNotes] = useState(notesInitial)

    // Add  Notes
      const addNote = (title, description, tag) =>{
        // TODO : Api Call
        console.log("Adding a new note")
        const note = {
          "_id": "6566f049w354204aa53b887fb0",
          "user": "6561a68d6ab648d2e34c2d97a",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2023-11-28T15:17:39.652Z",
          "__v": 0
        }

        setNotes(notes.concat(note))
      }

    // Delete Notes
    const deleteNote = () =>{
        
    }
    // Edit Note
    const editNote = () =>{
        
    }
    return ( 
<NoteContext.Provider value={{notes, setNotes, addNote, deleteNote, editNote}}>
{props.children}
</NoteContext.Provider>
    )
}

export default NoteState;