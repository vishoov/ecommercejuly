const mongoose = require("mongoose");


const cartSchema = new mongoose.Schema({
   
// userID:string,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
// Products:[{
products:[
    {
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product",
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        quantity:{
            type:Number,
            required:true,
            default:1
        }
    }
],
totalAmount:{
    type:Number,
    required:true,
    default:0
}
// productId: string,
// Price:number,
// quantity:number	
// }],
// totalAmount:number

})


const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;