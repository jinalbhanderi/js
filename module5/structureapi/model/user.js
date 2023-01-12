const mongoose = require("mongoose")
const userschema = new mongoose.Schema({
    user: {
        type: String
    },
    task: {
        type: String
    }
})
module.exports = new mongoose.model("task", userschema)