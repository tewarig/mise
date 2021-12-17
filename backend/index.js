if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const cros = require("cors");
const connectDb = require('./connectDb');




const app = express();
const port = process.env.PORT||4000;
connectDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoute = require("./routes/user");
app.use("/user",cros(),userRoute);

const productRoute = require("./routes/product");
app.use("/products",cros(),productRoute);

const orderApi = require("./routes/order");
app.use("/orders",orderApi);




app.listen(port,()=>(console.log(`server have started on port ${port}`)));