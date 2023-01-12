const mongoose = require("mongoose")
const productschema = new mongoose.Schema({
    pname: {
        type: String
    },
    price: {
        type: String
    },
    qty: {
        type: String
    }
})
module.exports = new mongoose.model("product", productschema)