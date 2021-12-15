const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
   name: {
       type: String,
       required: true,
   } ,
   image: [
       {
           imageUrl : String
       }
   ],
   price: {
       type:  Number ,
       required: true
   }, 
   description : {
       type: String,
       required: true
   },
   categories : {
       type: String,
       required: true
   }

});
module.exports = mongoose.model("product",productSchema);