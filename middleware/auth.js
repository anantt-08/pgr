var passport = require('passport');
var jwt = require('jsonwebtoken');
const User = require("../models/User");

exports.verifyUser = async function (req, res, next) {
  try {
    if (req.headers.authorization.length>0) {
      const token=req.headers.authorization.split(" ")[1]

      const decoded = jwt.verify(token, "test");

      let userId = decoded.userId;
      const user = await User.findOne({ _id: userId });
      if (!user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      req.user = user;
      return next();
    } else {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Unauthorized' });
  }
};
exports.verifyAdmin= function (req, res, next) {
    if (req.user.admin) {
        next();
    } else {
        var err = new Error('You are not authorized to perform this operation!');
        err.status = 403;
        return next(err);
    }
}
exports.auth=async(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(" ")[1]
        const isCustomAuth=token.length<500
        let decodeData

        if(token && isCustomAuth){
            decodeData=jwt.verify(token,'test')
            req.userId=decodeData.id; 

        }else{
            decodeData=jwt.decode(token)
            req.userId=decodeData.sub
        }

        next()
    }catch(err){
        console.log(err)
    }
}