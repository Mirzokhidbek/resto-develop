import express from "express"
import path from "path"

const app=express()
console.log("__dirname:",__dirname)
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}))
app.use(express.json())




app.set('view', path.join(__dirname,"views"));
app.set('view engine', "ejs")
export default app;