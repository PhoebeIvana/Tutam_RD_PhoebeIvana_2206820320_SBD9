// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

export const ToDoListSchema = new Schema({
  //attributes and its data type
  description: String,
  deadline: Date,
});

// Compile model from schema
export const ToDoListModel = mongoose.model("ToDoListModel", ToDoListSchema);
