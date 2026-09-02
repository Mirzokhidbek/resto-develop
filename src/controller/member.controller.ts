import {T} from "../libs/types/common"
import  {Request, Response} from "express"

const memberController: T ={}

memberController.goHome=(req:Request, res:Response)=>{
try{
res.send("Home Page")
} catch(err){
    console.log('Error, goHome',err)
}
    res.send("Home Page")
}
memberController.getLogin=(req:Request, res:Response)=>{
try{
res.send("Login Page")
} catch(err){
    console.log('Error, goHome',err)
}
    res.send("Home Page")
}

memberController.getSignup=(req:Request, res:Response)=>{
try{
res.send("Signup Page")
} catch(err){
    console.log('Error, goHome',err)
}
    res.send("Home Page")
}
export default memberController;