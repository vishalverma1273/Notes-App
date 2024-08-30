import express from "express";
import Connection from "./database/db.js";
import Routes from "./routes/route.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", Routes);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const PORT = 8000;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
