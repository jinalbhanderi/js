const express=require("express")
const app=express()
const port=8000
const hbs=require("hbs")
const path=require("./home.hbs")

app.listen(port,(req,resp)=>{
    console.log("server loaded",port);
})
app.get("/",(req,resp)=>{
    resp.render("/home")
})