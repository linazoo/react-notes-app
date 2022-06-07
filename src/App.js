import * as React from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = React.useState([
    {
      id: nanoid(),
      text: "this is my first note",
      date: "05/22/21",
    },
    {
      id: nanoid(),
      text: "this is my second note",
      date: "04/4/21",
    },
    {
      id: nanoid(),
      text: "this is my third note",
      date: "06/3/21",
    },
    {
      id: nanoid(),
      text: "this is my new note",
      date: "06/3/21",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
};

export default App;
