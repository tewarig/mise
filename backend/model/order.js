const mongoose = require('mongoose');

const OrderSchemea = new mongoose.Schema({
   email:{
       type: String,
       required :true,
       unique: true,

   },
   address: {
       type: String,
   },
   amount: {
       type: Number
   },
   name: {
       type:String
   },
   phoneNumer : {
      type: String
   },
   pin : {
       type : String
   }
  
   
});

module.exports = mongoose.model('price',OrderSchemea);