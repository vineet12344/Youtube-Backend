import express from 'express'
import { createNewTask , updateTask, findAllTasks ,deleteTask } from '../controllers/TaskController.js'

const router = express.Router();

router.post('/',createNewTask);
router.get('/',findAllTasks);
router.delete('/',deleteTask);
router.put('/', updateTask)


export default router;