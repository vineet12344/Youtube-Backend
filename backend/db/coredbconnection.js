import { MongoClient } from "mongodb";

async function coreConnect(){
    const client = new MongoClient(process.env.MONGO_URL);
    const db = client.db('test');
    const collection = db.collection("tasks");

    const result = await collection.aggregate([{$project: {_id: 0}}]).toArray();
    console.log(result);
}


export {coreConnect};