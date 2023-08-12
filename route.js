const express = require('express').Router();
const route = require('express').Router();
const UserModule = require('./module');
const {registervalidation} = require('./validation');
const {loginvalidation} = require('./validation');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

// registration............................................................................

route.post('/register',async(req,res)=>{

    const{error}= registervalidation(req.body);
    if(error) return res.status(401).send(error);

    // EmailVaidation......................................................................
    const emailExist= await UserModule.findOne({email:req.body.email});
    if(emailExist) res.status(404).send("email is alrady present...!");

    // passwordEncription..................................................................
    const salt= await bcrypt.genSalt(10);
    const hashPassword= await bcrypt.hash(req.body.password,salt);

    const newUser= new UserModule({
       name:req.body.name,
       email:req.body.email,
       password:hashPassword,
       mobile:req.body.mobile,
    })
    try{
      const SaveData= await newUser.save()
      res.send(SaveData);

    }catch(error){
      console.log(error);
    }
})


// login user..............................................................................

route.post('/login',async(req,res)=>{
    const{error} =await loginvalidation(req.body);
    if (error) return res.status(403).send(error.details[0].message);


    // Email validation....................................................................
    const userExist= await UserModule.findOne({email:req.body.email});
    if(!userExist) return res.status(403).send('invalid email...!');

    // password validation..................................................................
    const isPass= await bcrypt.compare(req.body.password , userExist.password);
    if(!isPass) return res.status(400).send('incorrect password....!');

    // jwt token............................................................................
    // const token= jwt.sign({_id:userExist._id,
    //                        name:userExist.name,
    //                        email:userExist.email,
    //                        mobile:userExist.mobile},process.env.Token_secret);
    // res.header('auth-token',token).send(token);

    // res.send("Login Successfully...!");
    res.json({success:true,userExist,message:'Login Succesfully'})
    
})

// ShowData.................................................................................

route.get('/showdata',async(req,res)=>{
    try{
        const ShowData = await UserModule.find();
        res.send(ShowData);

    }catch(error){
        console.log(`eroor while fatching data from DB. ${error}`);

    }

})

// data delete.........................................................................

route.delete('/delete',async(req,res)=>{
    let id=req.query.id;
    try{
        const deleteData= await UserModule.findByIdAndDelete(id);
        res.send(deleteData);

    }catch(error){
        console.log(error);

    }
})


// update data..................................................................
route.put('/update',async(req,res)=>{
    let _id = req.body._id
    try{
        const updateData= await UserModule.findByIdAndUpdate(_id,req.body);
        res.send(updateData);
       
    }catch(error){
        console.log(error);

    }
})

// show one........................................................................
route.get('/showOne',async(req,res)=>{
    let id = req.body.id
    try{
        const showOne= await UserModule.findOne(id);
        res.send(showOne);
        

    }catch(error){
        console.log(error);

    }


})


module.exports=route;