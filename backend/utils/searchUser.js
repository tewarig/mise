const User = require("../model/user");

let result ;
const search = async(email) => {

 let temp = await User.find({email});
 return temp;

}
module.exports = search;