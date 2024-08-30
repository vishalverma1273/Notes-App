import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.zamza.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  try {
    await mongoose.connect(URL);
    console.log(`server is connected successfully`);
  } catch (error) {
    console.log(`error while connecting ${error.message}`);
  }
};

export default Connection;
