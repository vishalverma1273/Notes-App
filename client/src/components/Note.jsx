import React from "react";
import { MdDelete } from "react-icons/md";
import { deleteNote } from "../service/api";

const NoteBox = ({ note }) => {
  return (
    <div className="box">
      <div>{note.text}</div>
      <div className="dateicon">
        <div className="date">{note.createdAt}</div>
        <div className="icon" onClick={() => deleteNote(note._id)}>
          <MdDelete />
        </div>
      </div>
    </div>
  );
};

export default NoteBox;
