import * as React from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = React.useState("");

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        onChange={handleChange}
        rows="8"
        cols="10"
        placeholder="Add a new note"
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>200 remaining chars</small>
        <button onClick={handleSaveClick} className="save">
          Save
        </button>
      </div>
    </div>
  );
};
export default AddNote;
