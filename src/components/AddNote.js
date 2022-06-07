const AddNote = () => {
  return (
    <div className="note new">
      <textarea rows="8" cols="10" placeholder="Add a new note"></textarea>
      <div className="note-footer">
        <small>200 remaining chars</small>
        <button className="save">Save</button>
      </div>
    </div>
  );
};
export default AddNote;
