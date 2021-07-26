const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
 

const Main = require("../models/main");

router.get('/company',async (req,res) =>{
    
   const result = await Main.find({},{symbol:true,_id:false})
   //console.log("==>",result)
   res.send(result)
         
})

//getting all details of all companies
router.get('/data/:name',async(req,res)=>{
   const getname=req.params.name;
   const details =await Main.find({symbol:getname})
   res.send(details)
})




module.exports = router;
