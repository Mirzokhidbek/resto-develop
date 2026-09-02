import express from "express"
import path from "path"
import router from "./router"
import routerAdmin from "./routerAdmin"

const app=express()
console.log("__dirname:",__dirname)
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}))
app.use(express.json())




app.set('views', path.join(__dirname,"views"));
app.set('view engine', "ejs")


app.use('/admin', routerAdmin);
app.use('/', router)
 
export default app;