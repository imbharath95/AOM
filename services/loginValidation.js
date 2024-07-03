
const zod=require("zod");
const jwt=require("jsonwebtoken");

const User = require("./models/Register.js");  

const loginSchema=zod.object({
    userName : zod.string().min(3),
    password : zod.string().min(8),
})

const loginValid= async (req,res,next)=>{
    const {success}= loginSchema.safeParse(req.body);
    if(!success){
        return res.status(404).json({
            message: "invalid input",
        })
    }
    const exists= await User.findOne({
        userName:req.body.userName,
        password:req.body.password
    })
    if(!exists){
        return res.status(404).json({
            message:"User doesn't exists",
        })
    }
    const token = jwt.sign({
        userId:exists._id
    },"AOM_");
    res.json({
        token:token
    })
    return ;

}