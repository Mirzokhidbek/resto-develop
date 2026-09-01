import express, { Request, Response } from "express"
const router=express.Router()


router.get('/',(req: Request, res:Response)=>{
    res.send("You are on Home Page")
 }) 

 router.get('/login',(req: Request, res:Response)=>{
    res.send("Login Page")
 }) 

 router.get('/signup',(req: Request, res:Response)=>{
    res.send("Signup Page")
 }) 

 export default router;