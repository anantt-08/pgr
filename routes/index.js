var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var bcrypt=require('bcryptjs')
var jwt=require('jsonwebtoken')
var authenticate = require("../middleware/auth");
const db = require('../config/keys').mongoURI;
const User = require("../models/User");
const Main = require("../models/main");
mongoose.connect(process.env.MONGODB_URI || db,{useNewUrlParser:true,useUnifiedTopology:true},function(err,result){
  if(err){
    console.log(`Error is: ${err}`)
  }
  else if(result){
    console.log("Connection Successful")
  }
})
//mongodb+srv://dev:123@cluster0.feqyg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority



router.post('/signin',async function(req,res,next){
  const {email,password}=req.body
  try{
        const existingUser=await User.findOne({email})
        if(!existingUser){
          return res.status(404).json({message:"User don't Exist !!!"})
        }
        const isPasswordCorrect=await bcrypt.compare(password,existingUser.password)
        if(!isPasswordCorrect){
          return res.status(401).json({message:"Invalid Credentials"})
        }
        if(!existingUser.status){
            return res.status(401).json({
                message: "Account Not Approved"
            })
        }
        const token=jwt.sign({email:existingUser.email, id:existingUser._id},'test',{expiresIn:"1h"})
        res.status(200).json({result:existingUser,token})
  }catch(e)
  {
    res.status(500).json({message:"Something Went Wrong"})
  }
})

router.get(
    "/userlist",
    function (req, res) {
        User.find({ admin: false }, function (err, User) {
            if (err) return console.error(err);
            return res.status(200).json({
                success: true,
                msg: "Listed",
                userlist: User,
            });
        });
    }
);


router.put(
    "/changestatus/:id",
    function (req, res) {
        User.findByIdAndUpdate(
            req.params.id,
            {
                status: req.body.status,
            },
            { new: true },
            function (err, result) {
                if (err) {
                    return res.status(400).json({
                        success: false,
                        msg: "Something went wrong",
                    });
                }
         return res.status(200).json({
                        success: true,
                        msg: "Status Updated!",
                        user: result,
                    }); 
    }    
        ); 
    } 
); 

router.post('/signup',async function(req,res,next){
  const {email,password,mobileno,confirmPassword,firstName,lastName}=req.body

  try{
        const existingUser=await User.findOne({email})

        if(existingUser){
          return res.status(401).json({message:"User already exists..."})
        }
        if(password != confirmPassword){
          return res.status(401).json({message:"Password don't match..."})
        }

        const hashedPassword=await bcrypt.hash(password,12)

        const result=await User.create({email,password:hashedPassword,name:`${firstName} ${lastName}`,mobile:mobileno})
        const token=jwt.sign({email:result.email, id:result._id},'test',{expiresIn:"1h"})
        res.status(200).json({result,token})
  }catch(e)
  {
    res.status(500).json({message:"Something Went Wrong"})
  }
})

module.exports = router;
