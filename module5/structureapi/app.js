const mongoose=require("mongoose")
const express=require("express")
const port=3000
const app=express()
const dburl="mongodb+srv://jinal:jinal123@cluster0.kg20vuu.mongodb.net/store?retryWrites=true&w=majority"
app.use(express.json())
mongoose.connect(dburl).then(()=>{
    console.log("db connected");
}).catch(()=>{
    console.log(error);
})

const userrouter=require()
