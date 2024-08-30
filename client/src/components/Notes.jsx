import React, { useEffect, useState } from "react";
import Note from "./Note";
import { getNotes } from "../service/api";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllNotes();
  });

  const getAllNotes = async () => {
    const response = await getNotes();
    setNotes(response.data);
  };

  return (
    <div className="container">
      {notes.map(note => (
        <Note key={note._id} note={note} />
      ))}
    </div>
  );
};

export default Notes;
