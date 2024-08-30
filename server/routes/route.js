import express, { request, response } from "express";
import {
  addNote,
  getNotes,
  deleteNote
} from "../controllers/note-controller.js";

const route = express.Router();

route.post("/text", addNote);
route.get("/notes", getNotes);
route.delete("/:id", deleteNote);

export default route;
