import mongoose from "mongoose";
import bcrypt from "bcryptjs";


import User from '../models/User.js';
import {createError} from '../error.js';


export const signup = async (req, res, next) => {
	try {
	//   const salt = bcrypt.genSaltSync(10);
	//   const hash = bcrypt.hashSync(req.body.password, salt);
	  const newUser = new User(req.body);
  
	  await newUser.save();
	  res.status(200).send("User has been created!");
	} catch (err) {
	  next(err);
	}
  };

export  const signin = async (req,res,next) => {
try {
	
	    const user = await User.findOne({name:req.body.name});
	    if(!user) return next(createError(404,"Not found"));
	
	    comparePass = bcrypt.compare(req.body.password,user.password);
	    if(!comparePass) return createError(404,"password not correct!");
	const token= jwt.sign({id:user._id},process.env.JWT);
	const {password,...others} = user._doc;	
	res.cookie('token',token,{
		httpOnly:true
	}).status(200).json(others);
} catch (error) {
	next(error);
}
};

export  const googleAuh = async (req,res) => {

}