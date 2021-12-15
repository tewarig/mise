const mongoose = require('mongoose');

const UserSchemea = new mongoose.Schema({
   email:{
       type: String,
       required :true,
       unique: true,

   },
   address:{
       type: String,
   },
   orders:[ {
       prices : {
           type: String
       },
      date : {
          type: String
      }
       
    }

   ]
});

module.exports = mongoose.model('User',UserSchemea);