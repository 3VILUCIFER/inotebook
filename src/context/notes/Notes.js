import React, {useContext} from "react";
import noteContext from './NoteContext';
import Noteitem from "./Noteitem";

const Notes = () => {
 const context = useContext(noteContext);
    const {notes, setNotes} = context;
  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <div className="row">
      {notes.map((note) => {
        return <Noteitem note={note}/>;
      })}
      </div>
    </div>
  );
};
export default Notes;
