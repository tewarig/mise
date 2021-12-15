const mongoose = require("mongoose");
async function connectDb() {
  try {
    await mongoose.connect(process.env.dbUrl, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
}
module.exports = connectDb;
