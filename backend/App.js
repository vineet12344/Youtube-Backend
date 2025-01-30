import express from "express"
import cors from 'cors'
import taskRoutes from './routes/taskRoutes.js';
import coreTaskRoutes from "./routes/coreTaskRoutes.js";


const app = express();

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));

// app.use('/api/tasks', taskRoutes);
app.use('/api/tasks',coreTaskRoutes);

app.get('/', (req, res) => {
    const data = req.body;
    res.send("<h1>SERVER STARTED MEOW</h1>");
})

export {app};