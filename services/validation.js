const express=require("express");
const zod=require("zod");
const jwt=require("jsonwebtoken");


const schema = zod.object({
    firstName:zod.string().min(3),
    lastName : zod.string().min(3),
    userName : zod.string().min(3),
    email : zod.string().email(),
    password : zod.string().min(8),
    confirmpassword : zod.string().min(8),
    companyName : zod.string().min(3),
    phone : zod.string().regex(/^\(\d{3}\) \d{3}-\d{4}$/),
    zip : zod.string().regex(/^\d{5}(-\d{4})?$/),
    address : zod.string().min(3),
    city : zod.string().min(3),
    
})

const validationMiddleware=(req,res,next)=>{
    const {success}=schema.safeParse(req.body);
    if(!success){
        return res.status(404).json({
            message: "invalid input",
        })
    }
    const token=jwt.sign(req.body,"AOM");
    console.log(token);
    res.json({token});
}

module.exports =validationMiddleware;

