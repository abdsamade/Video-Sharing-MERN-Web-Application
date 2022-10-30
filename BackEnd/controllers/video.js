import { createError } from "../error.js";
import User from "../models/User.js";
import Video from "../models/Video.js"



export const AddVideo = async (req,res,next) => {

    const newVideo =  new Video({userId:req.user.id,...req.body});

try {
	
	    await newVideo.save();
	    res.status(200).json(newVideo);
	
} catch (error) {
	next(createError(404,"Not Created !"));
}
}

export const UpdateVideo = async (req,res,next) => {

    const video = await Video.findById(req.params.id);
    if(!video) return createError(403,'Video not found ');

   try {
	 if(req.user.id == video.userId) {
	        const updateVideo = await User.findByIdAndUpdate(req.params.id, {
	            $set : req.body,
	        },{new : true})
			res.status(200).json(updateVideo);
	    
		}
	 } catch (error) {
	next(createError(404,"Not updated"));
}
}

export const DeleteVideo = async (req,res,next) => {

    const video = await Video.findById(req.params.id);
    if(!video) return createError(403,'Video not found ');

   try {
	 if(req.user.id == video.userId) {
        await User.findByIdAndDelete(req.params.id);
    }
	    res.status(200).json("Deleted !");
} catch (error) {
	next(createError(404,error));
}


}
export const getVideo = async (req,res,next) => {
try {
	const video = await User.findById(req.params.id);
	if(!video) return createError(403,'Video not found ');
	   
	res.status(200).json(video);
	
} catch (error) {
	next(createError(404,error));
}
}

export const Addviews = async (req,res,next) => {
try {
	
		await Video.findByIdAndUpdate(req.params.id , {
			$inc:{views :1}
		})
		res.status(200).json("incremented !");
} catch (error) {
	next(createError(404,error));
}
}
export const gettrends = async (req,res,next) => {

	try {
			const videos = await Video.find().sort({views:-1});
		res.status(200).json(videos);
} catch (error) {
	next(createError(404,error));
}
}

export const getrandom = async (req,res,next) => {

	try {
		
		const videos = await Video.aggregate([{$sample:{size :20}}]);
		
		res.status(200).json(videos);
} catch (error) {
	next(createError(404,error));
}

}


export const getBytags = async (req,res,next) => {

	const tags= req.query.tags.split(',');
try {
	
		const videos = await Video.find({tags : {$in : tags}}).limit(10);

		res.status(200).json(videos);
	
} catch (error) {
		next(createError(404,error));	
}};

export const search = async (req,res,next) => {
	
}