import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true , "This field is required"],
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
}
,{timestamps: true});




export const Task = mongoose.model("Task",taskSchema);