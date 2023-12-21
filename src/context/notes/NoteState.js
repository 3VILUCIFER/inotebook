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
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3ZmY2N2YyYzliM2ZlODVlNTc2MGNlIn0sImlhdCI6MTcwMjg4NTE1M30.YDujL1u0i5ZASeqPs1RCCr4WYShd9cCEESeZ0jZFKVk"
        }
      });
      const note = await response.json();
      setNotes(note);
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
      const note = await response.json(); 
        setNotes(notes.concat(note))
      }

    // Delete Notes
    const deleteNote = async (id) =>{
      //Api Call 
      const response = await fetch(`http://localhost:5000/api/notes/deletenote/${id}`, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3ZmY2N2YyYzliM2ZlODVlNTc2MGNlIn0sImlhdCI6MTcwMjg4NTE1M30.YDujL1u0i5ZASeqPs1RCCr4WYShd9cCEESeZ0jZFKVk"
        }
      });
      const json = response.json();

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
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3ZmY2N2YyYzliM2ZlODVlNTc2MGNlIn0sImlhdCI6MTcwMjg4NTE1M30.YDujL1u0i5ZASeqPs1RCCr4WYShd9cCEESeZ0jZFKVk"
        },
        body: JSON.stringify({title, description, tag}), 
      });
      const json = await response.json()

      let newNotes =  JSON.parse(JSON.stringify(notes));
      // Logic to edit in  client 
      for(let index=0; index<newNotes.length; index++){
        const element = newNotes[index];
        if(element._id === id){
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
      }
      setNotes(newNotes);   
    }
    return ( 
<NoteContext.Provider value={{notes, setNotes, addNote, deleteNote, editNote, getNotes}}>
{props.children}
</NoteContext.Provider>
    )
}

export default NoteState;