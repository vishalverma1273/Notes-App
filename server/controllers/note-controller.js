import Note from "../model/Note.js";

export const addNote = async (request, response) => {
  try {
    const newNote = await Note.create({
      text: request.body.data,
      createdAt: Date.now()
    });
    await newNote.save();
    return response.status(200).json(newNote);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const getNotes = async (request, response) => {
  try {
    const notes = await Note.find({});
    return response.status(200).json(notes);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const deleteNote = async (request, response) => {
  try {
    await Note.deleteOne({ _id: request.params.id });
    return response.status(200).json("Note Deleted successfully");
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
