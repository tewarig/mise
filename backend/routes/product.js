const express = require("express");
const router = express.Router();
const product = require("../model/product");

router.get("/",async(req,res)=>{
    try{
        const products = await product.find();
        res.json(products);
     

    }
    catch{
       
    }
});
router.post("/",async(req,res)=>{
    console.log(req.body);
    const newProduct = new product(req.body);
    try{
        const a1 = await newProduct.save();
        // res.send(a1);
    }catch(error){
        console.log(error);
    }

    res.send("data recevied");
})


module.exports = router;