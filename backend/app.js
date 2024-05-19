// importing express framework
import express from 'express';
// importing the controller
import { CreateFunction, GetFunction, UpdateFunction, DeleteFunction} from './Controller/ToDoListController.js';
// importing cors
import cors from 'cors';
// importing mongoose
import mongoose from 'mongoose';
// importing dotenv
import dotenv from "dotenv";

// defining the express for this app  
const app = express(); 
const PORT = 3001; 
const router = express.Router();
dotenv.config();

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
});

//Middleware : Enable communications in between app
app.use(cors());
app.use(express.json());

// Route for Create
router.post("/create", CreateFunction);
// Route for Read
router.get("/read", GetFunction);
// Route for Update
router.put("/update/:id", UpdateFunction);
// Route for Delete
router.delete("/delete/:id", DeleteFunction);

const errorFunction = (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running,  and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
} 

app.use(router);
app.listen(PORT, errorFunction);