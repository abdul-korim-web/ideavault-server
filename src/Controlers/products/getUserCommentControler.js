import CommentModel from "../../Schema/commentSchema.js";

const getUserCommentControler = async(req,res,next)=>{
    try {
       
        const userId = req.payload.id;
            const userComment = await CommentModel.find({ "creator.id": userId });
            res.status(200).json({
              success: true,
              total: userComment?.length,
              data: userComment,
            });
    } catch (error) {
        next(error)
    }
}

export default getUserCommentControler