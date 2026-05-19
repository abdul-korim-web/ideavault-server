import CommentModel from "../../Schema/commentSchema.js";


const deleteProductCommentControler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const comment =  await CommentModel.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Comment deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export default deleteProductCommentControler;