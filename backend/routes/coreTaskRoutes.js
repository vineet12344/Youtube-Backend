import express from "express";
import { findTask , createTask  } from "../controllers/CoreTaskControllers.js";

const router = express.Router();

router.get('/',findTask);
router.post('/',createTask);


export default router;

