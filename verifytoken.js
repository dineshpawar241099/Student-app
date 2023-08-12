const jwt = require('jsonwebtoken');
module.exports=(req,res,next)=>{
    const token=req.headers('auth-token');
    if(!token) return res.status(403).send("access denied...!");

    try{
        const verified= jwt.verify(token,process.env.Token_secret)
        res.userExist=jwt.verified;
        next();

    }catch(error){
        res.status(403).send("invalid token...!");

    }
}