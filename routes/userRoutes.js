import express from 'express'
import { registerUser,loginUser, getRegisterForm, getLoginForm, logout } from '../controllers/userControllers.js'

let userRouter=express.Router()


userRouter.get("/register",getRegisterForm)
userRouter.get("/login",getLoginForm)
userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.get("/logout",logout)

export default userRouter;