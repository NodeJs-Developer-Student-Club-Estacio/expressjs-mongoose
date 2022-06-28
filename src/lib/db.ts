import mongoose from "mongoose";

mongoose.connect('mongodb://docker:mongopw@localhost:49153');

const database = mongoose.connection;

database.on(
  "error",
  console.error.bind(console, "❌ mongodb connection error"),
);
database.once("open", () => console.log("✅ mongodb connected successfully"));

mongoose.Promise = Promise;
