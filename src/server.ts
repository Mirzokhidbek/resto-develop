 import dotenv from "dotenv";
 dotenv.config();
import app from './app'
import mongoose  from "mongoose"
mongoose.set("strictQuery", true);


mongoose
.connect(process.env.MONGO_URL as string,{})
.then((data)=>{
console.log("MongoDB connection succed");
const PORT=process.env.PORT ?? 3000;
app.listen(PORT, function(){
    console.log(`This server is running secessfully ${PORT}`)
})
})

