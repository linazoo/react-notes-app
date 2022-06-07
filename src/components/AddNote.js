import * as React from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = React.useState("");
  const characterLimit = 200;

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
        <small>{characterLimit - noteText.length} characters remaining</small>
        <button onClick={handleSaveClick} className="save">
          Save
        </button>
      </div>
    </div>
  );
};
export default AddNote;
