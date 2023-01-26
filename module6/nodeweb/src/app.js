const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = 3000
const path = require("path")
const hbs = require("hbs")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const dburl = "mongodb+srv://jinal:jinal123@cluster0.kg20vuu.mongodb.net/store?retryWrites=true&w=majority"
mongoose.connect(dburl).then(() => {
    console.log('db connected');
}).catch(err => {
    console.log(err);
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

const viewpath = path.join(__dirname, "../templates/views")
app.set("view engine", "hbs")
app.set("views", viewpath)

const userrouter = require("../router/userrouter")
app.use("/", userrouter)
app.listen(port, () => {
    console.log("server running out");
})                 