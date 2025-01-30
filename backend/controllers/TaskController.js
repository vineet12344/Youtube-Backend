import { Task } from "../models/tasks.model.js"; 

export const createNewTask = async (req, res) => {
    try {
        const { title, description, createdAt } = req.body;
        const newTask = new Task({ title, description, createdAt });

        await newTask.save();
        res.status(201).json({message: "Task created sucessfully, ", task: newTask})

    } catch (error) {
        console.log("Error creating a task : ", error);
    }
}

export const findAllTasks = async (req,res) => {
    try {
        const tasks = await Task.find();

        if (tasks.length === 0) {
            return res.json(" No tasks found ").status(404);
        }

        res.status(200).json({message: "Tasks Fetched Sucessfully !! ", tasks})

    } catch (error) {
        console.log("Error in find all tasks controller: ", error);
    }
}


export const  deleteTask = async (req, res) => {
    try {
        const {name} = req.body;
        const task = await Task.findOneAndDelete(name);

        if(!task){
            return res.status(404).json({message: "Task not found "});
        }
    } catch (error) {
        console.log("Error Occured in deleteTaskController: ", error);
        res.status(500).json({message: "INTERNAL SERVER ERROR"})
    
    }
}


export const updateTask = async (req,res) => {

    const { id,  title, description } = req.body;
    
    const updatedTask = await Task.findByIdAndUpdate(id,{title,description});

    if(updatedTask){
        console.log("TASK UPDATED SUCESSFULLY");
        
       return res.status(200).json(
            {
                message: "Task Updated",
                task: updateTask
            });
    }
    
        
        return res.status(404).json({message: "Task not found"});
}

