import { MongoClient } from "mongodb";


export const createTask = async (req ,res) => {
    const client = new MongoClient(process.env.MONGO_URL);
    const db = client.db('test');
    const collection = db.collection('tasks');

    const { title, description } = req.body;
    const result = await collection.insertOne({
        title,description
    });

    if(result){
        return res.status(500).json({message: "Inderted a Task"})
    }
}

export const findTask = async (req , res) => {
    const client = new MongoClient(process.env.MONGO_URL);
    const db = client.db('test');
    const collection = db.collection('tasks');
    
    const result = await  collection.find({}).toArray();

    if (!result) {
        return res.status(404).json({message: "Tasks Fetch unsuccesfull !"});
    }

    return res.status(200).json({ message: "Tasks Fetch succesfull !",result });
}