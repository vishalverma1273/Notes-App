import axios from "axios";
const URL = "http://localhost:8000";

export const NoteText = async text => {
  try {
    return await axios.post(`${URL}/text`, text);
  } catch (error) {
    console.log("Error while calling an API", error.message);
  }
};

export const getNotes = async () => {
  try {
    return await axios.get(`${URL}/notes`);
  } catch (error) {
    console.log("Error while calling an API", error.message);
  }
};

export const deleteNote = async id => {
  try {
    console.log("i am delete note api", id);

    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while calling an API", error.message);
  }
};
