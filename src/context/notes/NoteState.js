import { useState } from "react";
import NoteContext from "./NoteContext";  

const NoteState = (props) => {
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)

    // Get All Notes
    const getNotes =async () =>{
      // TODO: Api Call 
      const response = await fetch(`http://localhost:5000/api/notes/fetchallnotes`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2MWE2ODZhYjY0OGQyZTM0YzJkOTdhIn0sImlhdCI6MTcwMjk1MTgyNX0.C_hWWaCmfvSPMTfIbPp-IdZgBxMhwILDNJzXdTEQcS0"
        }
      });
      const json = await response.json();
      console.log(json)
      setNotes(json);
    }


    // Add  Notes
      const addNote = async (title, description, tag) =>{
        // TODO : Api Call
        const response = await fetch(`http://localhost:5000/api/notes/addnotes`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3ZmY2N2YyYzliM2ZlODVlNTc2MGNlIn0sImlhdCI6MTcwMjg4NTE1M30.YDujL1u0i5ZASeqPs1RCCr4WYShd9cCEESeZ0jZFKVk"
        },
        body: JSON.stringify({title, description, tag}), 
      });
      const json = await response.json(); 
      console.log(json)

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
    const deleteNote = async (id) =>{
      //Api Call 
      const response = await fetch(`http://localhost:5000/api/notes/deletenote/${id}`, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2MWE2ODZhYjY0OGQyZTM0YzJkOTdhIn0sImlhdCI6MTcwMTA0NDg4N30.2a5-35dw39w-YudT3i_hXPKXyYpUz4u-Py5cmAqBCdI"
        }
      });
      const json = response.json();
      console.log(json)

        console.log("deleting the note "+id)
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes);
    }
    // Edit Note
    const editNote = async (id, title, description, tag) =>{
      // TODO : Api Call 
      const response = await fetch(`http://localhost:5000/api/notes/updatenote/${id}`, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
        },
        body: JSON.stringify({title, description, tag}), 
      });
      const json = response.json(); 
      console.log(json)
      // Logic to edit in  client 
      for(let index=0; index=notes.length; index++){
        const element = notes[index];
        if(element._id === id){
          element.title = title;
          element.description = description;
          element.tag = tag;
        }
      }
    }
    return ( 
<NoteContext.Provider value={{notes, setNotes, addNote, deleteNote, editNote, getNotes}}>
{props.children}
</NoteContext.Provider>
    )
}

export default NoteState;