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

module.exports = router;