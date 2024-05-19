import { ToDoListModel } from "../schema/ToDoList.js";

//Controller for CREATE
export const CreateFunction = async (req, res) => {
  //async : parallel for users
  const { description, deadline } = req.body;
  try {
    const task = new ToDoListModel({ description, deadline });
    const saveTask = await task.save();
    res.status(201).json(saveTask);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while creating a task." });
  }
};

//Controller for READ
export const GetFunction = async (req, res) => {
  try {
    const toDoList = await ToDoListModel.find();
    res.json(toDoList);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the data." });
  }
};

//Controller for UPDATE
export const UpdateFunction = async (req, res) => {
  const { description, deadline } = req.body;
  const id = req.params.id;
  try {
    const updatedTask = await ToDoListModel.findByIdAndUpdate(
      id,
      { description, deadline },
      { new: true }
    );
    //returning the updated data
    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(updatedTask);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the data." });
  }
};

//Controller for DELETE
export const DeleteFunction = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTask = await ToDoListModel.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(deletedTask);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the data." });
  }
};
