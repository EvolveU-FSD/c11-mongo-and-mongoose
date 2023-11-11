import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.MONGO_URL);
const connectionString = process.env.MONGO_URL;

const db = await mongoose.connect(connectionString);

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
});

const User = db.model("user", userSchema);

const users = await User.find();

console.log(users);
