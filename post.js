const route = require('express').Router();
const verify= require('./verifyToken');


route.get('/tokens',verify,(req,res)=>{
    res.jeson({
        post:{title:'JWT-Token',
        description:"this is our first jwt token....!"}
    })
})
module.exports =route;