const express=require('express');
const products = require('../data/products');
const router=express.Router();


router.get('/products',(req,res)=>{
    return res.json(products)
})

// find products by id
router.get('/products/:id',(req,res)=>{
    const item=products.find(items=>items.id===parseInt(req.params.id))
    return res.status(200).json(item)
})




module.exports=router;