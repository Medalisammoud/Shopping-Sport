const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const { ObjectId } = mongoose.Schema;

const orderSchema = new Schema({
    orderUser:{
        type : ObjectId,
        ref : "User",
        required : true
    },
    product : {
        type : Array ,
    },
    createdAt : {
        type : Date,
        default : new Date()
    }
})

module.exports = Order = model("order", orderSchema);