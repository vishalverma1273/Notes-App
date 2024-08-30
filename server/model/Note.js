import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    defaut: Date.now
  }
});

const note = mongoose.model("note", NoteSchema);

export default note;
