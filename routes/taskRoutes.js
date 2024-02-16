import express from 'express'
import { deleteTask, getTask, getTasks, postTask, updateTask } from '../controllers/taskControllers.js'
import { auth } from '../middlewares/auth.js'
//router instace
let taskRouter=express.Router()

taskRouter.post("/",postTask)
taskRouter.get("/",auth,getTasks)
taskRouter.get("/:id",getTask)
taskRouter.put("/:id",updateTask)
taskRouter.delete("/:id",deleteTask)

export default taskRouter;