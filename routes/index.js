var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var bcrypt=require('bcryptjs')
var jwt=require('jsonwebtoken')
var authenticate = require("../middleware/auth");
const db = require('../config/keys').mongoURI;
var nodemailer = require("nodemailer");
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

const UserLoginListSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  emailid:{
    type:String,
    require:true
  },
  date:{
    type:String,
    require:true
  },
  time:{
    type:String,
    require:true
  }

})

const UserLoginListSchema2=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  emailid:{
    type:String,
    require:true
  },
  Last_Seen:{
    type:String,
    require:true
  },
  count:{
    type:Number,
    default:0,
    require:true
  }

})

const User_Login_List= new mongoose.model("User_Login_List",UserLoginListSchema)

const User_Login_List2= new mongoose.model("User_Login_List2",UserLoginListSchema2)

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

        const d = new Date();
        const datee=d.toLocaleDateString()
        const Timee=d.toLocaleTimeString()
        const info= new User_Login_List({
          name:existingUser.name,
          emailid:existingUser.email,
          date:datee,
          time:Timee,
        })
        const result=info.save()

        const existingUser2=await User_Login_List.find({emailid:email})
        const existingUser3=await User_Login_List2.find({emailid:email})

        console.log("EEEEEEEEEEEEEEEEEEEEE",existingUser2)

        if(existingUser3.length==0){

          const info2= new User_Login_List2({
            name:existingUser.name,
            emailid:existingUser.email,
            Last_Seen:datee+", "+Timee,
            count:existingUser2.length+1,
          })

          const result2=info2.save()

        }
        else{

          const result2=await User_Login_List2.updateOne({emailid:email},{
            $set:{
              Last_Seen:datee+", "+Timee,
              count:existingUser2.length+1,
            }
          })

        }

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

router.put("/changestatus/:id",(req, res, next) => {
    User.findByIdAndUpdate(req.params.id, {
           payment:req.body.payment,adminpayment:req.body.adminpayment,lastupdate:req.body.lastupdate
    }, { new: true })
    .then((result) => {
        return res.status(200).json({result:result,token:""});
    }
    //for error handling of this
    , (err) => next(err))
    .catch((err) => next(err));
})


router.get(
    "/userlisttwo",
    function (req, res) {
        User.find({ admin: false,payment:true,adminpayment:false }, function (err, User) {
            if (err) return console.error(err);
            return res.status(200).json({
                success: true,
                msg: "Listed",
                userlist: User,
            });
        });
    }
);




router.post("/reset", function (req, res) {
    User.findOne({ email: req.body.email }, function (error, userData) {
        if (userData == null) {
            return res.status(404).json({
                success: false,
                msg: "Email is not register",
            });
        }

        var transporter = nodemailer.createTransport({
            service: "gmail",
            secure: false, // true for 465, false for other ports
            auth: {
                user: "pgrdemo@gmail.com", // generated ethereal user
                pass: "1234Test@", // generated ethereal password
            },
             tls:{
        rejectUnauthorized:false
    }
        });
        var currentDateTime = new Date();
        var mailOptions = {
            from: "pgrdemo@gmail.com",
            to: req.body.email,
            subject: "Password Reset",
            html:
                "<h1 style='font-family:verdana;color:red'>Welcome To Security Password RESET !</h1><p>\
            <h3>hellow" + 
                userData.name +
                "</h3>\
            If You are requested to reset your password then click on below link<br/>\
            <a href='http://localhost:3000/change-password/" +
                currentDateTime +
                "+++" +
                userData.email +
                "'>Click On This Link</a>\
             </p>"
            } 
       
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
                User.updateOne(
                    { email: userData.email },
                    {
                        token: currentDateTime,
                    },
                    { multi: true },
                    function (err, affected, resp) {
                        return res.status(200).json({
                            success: false,
                            msg: info.response,
                            userlist: resp,
                        });
                    }
                );
            }
        });
    });
});


router.get('/userloginlist',async function(req,res) {
  
  const result=await User_Login_List.find()
  result.reverse()
  return res.status(200).json(result)
});

router.get('/userlistforpayment',async function(req,res) {
  
  const result=await User.find({payment:true})
  return res.status(200).json(result)
});

router.get('/userlistforpayment2',async function(req,res) {
  
  const result=await User.find({payment:false})
  return res.status(200).json(result)
});

router.post('/updatepaymentstatus',async function(req,res,next){
  
  try{
    var id=req.body.id
    console.log(id, req.body)
    const result=await User.updateOne({email:id},{
      $set:{
        payment:true,
        adminpayment:true
      }
    })
    return res.status(200).json({'RESULT':true})
  }
  catch(err){
    console.log(err)
  
    return res.status(500).json({'RESULT':false})
  }
  
})

router.post('/updatepaymentstatus2',async function(req,res,next){
  
  try{
    var id=req.body.id
    console.log(id, req.body)
    const result=await User.updateOne({email:id},{
      $set:{
        payment:false,
        adminpayment:false
      }
    })
    return res.status(200).json({'RESULT':true})
  }
  catch(err){
    console.log(err)
  
    return res.status(500).json({'RESULT':false})
  }
  
})

router.get('/userloginlist2',async function(req,res) {
  
  const result2=await User_Login_List2.find().sort({count:-1})
  return res.status(200).json(result2)
});
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
                if(req.body.status){
                      var transporter = nodemailer.createTransport({
                service: "gmail",
                secure: false, // true for 465, false for other ports
                auth: {
                    user: "pgrdemo@gmail.com", // generated ethereal user
                    pass: "1234Test@", // generated ethereal password
                },
                 tls:{
            rejectUnauthorized:false
        }
            });
            var mailOptions = {
                from: "pgrdemo@gmail.com",
                to: result.email,
                subject: "Successfully Registered",
                html:
                    `<h1 style='font-family:verdana;color:red'>You Are Now Registered!</h1>
                    <h2>Hello <b>${result.name}</b> You can now login With Your-</h2>
                    <h2><i>Email: ${result.email} </i></h2>
                    ` 
                } 
               
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log("Email sent: " + info.response);
                    }
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

router.post("/updatePassword", function (req, res) {
    User.findOne({ email: req.body.email }, function (errorFind, userData) {
        if (
            userData.token == req.body.linkDate &&
            req.body.password == req.body.confirm_password
        ) {
          console.log("happy")
            bcrypt.genSalt(12, (errB, salt) => {
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                    if (err) throw err;
                    let newPassword = hash;
                    let condition = { _id: userData._id };
                    let dataForUpdate = {
                        password: newPassword
                    };
                    User.findOneAndUpdate(
                        condition,
                        dataForUpdate,
                        { new: true , useFindAndModify: false},
                        function (error, updatedUser) {
                            if (error) {
                                if (
                                    err.name === "MongoError" &&
                                    error.code === 11000
                                ) {
                                    return res
                                        .status(500)
                                        .json({
                                            msg: "Mongo Db Error",
                                            error: error.message,
                                        });
                                } else {
                                    return res
                                        .status(500)
                                        .json({
                                            msg: "Unknown Server Error",
                                            error:
                                                "Unknow server error when updating User",
                                        });
                                }
                            } else {
                                if (!updatedUser) {
                                    return res.status(404).json({
                                        msg: "User Not Found.",
                                        success: false,
                                    });
                                } else {
                                    return res.status(200).json({
                                        success: true,
                                        msg:
                                            "Your password are Successfully Updated",
                                        updatedData: updatedUser,
                                    });
                                }
                            }
                        }
                    );
                });
            });
        }
        if (errorFind) {
            return res.status(401).json({
                msg: "Something Went Wrong",
                success: false,
            });
        }
    });
});
module.exports = router;
