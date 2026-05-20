import CommentModel from "../../Schema/commentSchema.js";


const updateCommentControler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { comment } = req.body;

    const existingComment = await CommentModel.findByIdAndUpdate(
      id,
      { comment },
      { new: true }
    );

    if (!existingComment) {
      return res.status(404).json({
        success: false,
        message: "Comment not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Comment updated successfully",
      data: existingComment,
    });

  } catch (error) {
    next(error);
  }
};

export default updateCommentControler;