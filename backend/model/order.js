const mongoose = require('mongoose');

const OrderSchemea = new mongoose.Schema({
   email:{
       type: String,
       required :true,
       unique: true,

   },
   price: {
       type: String,
       required: true,
   }
   
});

module.exports = mongoose.model('price',OrderSchemea);