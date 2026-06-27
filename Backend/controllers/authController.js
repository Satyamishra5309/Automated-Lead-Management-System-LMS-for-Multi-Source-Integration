import User from "../model/User.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req,res)=>{
   
    try{

        const{name, email, password} = req.body;

        if(!name || !email || !password){
            return res.json({
                message: "All fields are required"
            });
        };


        const existingUser = await User.findOne({
            email
        });

        if(existingUser) return res.json({message:"User already exist"});

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password:hashedPassword

        });


        res.json({
            message:"User registered successfully",
            user: {
                id: user._id,
                email: user.email

            }
        });
    }catch(error){
        
        res.status(500).json({
            message:error.message
        })
    }
};


export const loginUser = async (req,res) => {

    res.json({
        message:"login working"
    });
};