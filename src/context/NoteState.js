import { useState } from "react";
import NoteContext from "./notes/NoteContext";  

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "6566049354204aa53b887fb0",
          "user": "6561a686ab648d2e34c2d97a",
          "title": "my title",
          "description": "i am devil of my world",
          "tag": "personal",
          "date": "2023-11-28T15:17:39.652Z",
          "__v": 0
        },
        {
          "_id": "6566049354204aa53b887fb0",
          "user": "6561a686ab648d2e34c2d97a",
          "title": "my title",
          "description": "i am devil of my world",
          "tag": "personal",
          "date": "2023-11-28T15:17:39.652Z",
          "__v": 0
        }, {
          "_id": "6566049354204aa53b887fb0",
          "user": "6561a686ab648d2e34c2d97a",
          "title": "my title",
          "description": "i am devil of my world",
          "tag": "personal",
          "date": "2023-11-28T15:17:39.652Z",
          "__v": 0
        }, {
          "_id": "6566049354204aa53b887fb0",
          "user": "6561a686ab648d2e34c2d97a",
          "title": "my title",
          "description": "i am devil of my world",
          "tag": "personal",
          "date": "2023-11-28T15:17:39.652Z",
          "__v": 0
        }, {
          "_id": "6566049354204aa53b887fb0",
          "user": "6561a686ab648d2e34c2d97a",
          "title": "my title",
          "description": "i am devil of my world",
          "tag": "personal",
          "date": "2023-11-28T15:17:39.652Z",
          "__v": 0
        },
      ]

    const [notes, setNotes] = useState(notesInitial)
    return (
<NoteContext.Provider value={{notes, setNotes}}>
{props.children}
</NoteContext.Provider>
    )
}

export default NoteState;