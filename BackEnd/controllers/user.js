import User from "../models/User.js";



export  const update = async (req,res,next) => {
  try {
	  
	    if(req.params.id === req.user.id ) {
	        const updateuser = await User.findByIdAndUpdate(req.params.id,{
	            $set:req.body
	        },{new:true})
	
	        res.status(200).json(updateuser);
	    }
} catch (error) {
	res.json(error);
}

};


export  const deletee = async (req,res,next) => {
    try {
	  
	    if(req.params.id === req.user.id ) {
	         await User.findByIdAndDelete(req.params.id);
	
	        res.status(200).json("deleted ");
	    }
} catch (error) {
	next(createError(400,error));
}

};

export  const getUser = async (req,res,next) => {
try {
	
		const user = await User.findById(req.params.id);
		res.status(200).json(user);
	
} catch (error) {
	next(res.json(createError(404,"Not Found !")));
}
};

export  const subscribe = async (req,res,next) => {
	try {
	await User.findById(req.user.id,{
		$push : {subscribedUsers : req.params.id}
	})
	await User.findByIdAndUpdate(req.params.id,{
		$inc : {subscribers:1}, 
	})

	res.status(200).json("Success !")
} catch (error) {
	next(res.json(createError(404,"not found !")))
}
};

export  const unsubscribe = async (req,res,next) => {
try {
	
		await User.findById(req.user.id,{
			$pull : {subscribedUsers : req.params.id}
		})
	
		await User.findById(req.params.id,{
			$inc : {subscribers:-1}
		})
	res.status(200).json("Success !")

} catch (error) {
	next(res.json(createError(404,"not found !")))

}

};


export  const like = async (req,res,next) => {
	const id = req.user.id;
	const videoId = req.params.videoId;
	try {
	  await Video.findByIdAndUpdate(videoId,{
		$addToSet:{likes:id},
		$pull:{dislikes:id}
	  })
	  res.status(200).json("The video has been liked.")
	} catch (err) {
	  next(err);
	}
};

export  const dislike = async (req,res,next) => {
	const id = req.user.id;
    const videoId = req.params.videoId;
    try {
      await Video.findByIdAndUpdate(videoId,{
        $addToSet:{ dislikes:id},
        $pull:{likes:id}
      })
      res.status(200).json("The video has been disliked.")
  } catch (err) {
    next(err);
  }
};

