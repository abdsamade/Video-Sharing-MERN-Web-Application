import Video from "../models/Video.js";
import { createError } from "../error.js";
import Comment from "../models/Comment.js"


export const addComment = async (req,res,next) => {

  try {
	  const comment= new Comment({...req.body,userId:req.user.id});
	    
	    const savedComment = await comment.save();
	
	    res.status(200).json(savedComment);
} catch (error) {
	next(createError(404,error));
}
}

export const deleteComment = async (req,res,next) => {
    try {
	const comment = await Comment.findById(req.params.id);
	    const video = await Video.findById(req.params.id);
	
	    if(req.user.id ===comment.userId || video.userId === req.user.id) {
	
	        await Comment.findByIdAndDelete(req.params.id);
	    res.status(200).json("deleted ! ! ! ");
	        
	    }
} catch (error) {
	next(createError(404,error));
	
}
}


export const getComments = async (req,res,next) => {
try {
	
	       const all = await Comment.find({videoId : req.params.id});
	            res.status(200).json(all);
	
} catch (error) {
	next(createError(404,error));
	
}


}