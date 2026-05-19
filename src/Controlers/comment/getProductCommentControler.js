import CommentModel from "../../Schema/commentSchema.js";


const getProductCommentControler = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(`higv`);

    const comments = await CommentModel.find({
      productId: id,
    }).sort({ createdAt: -1 });
console.log('comments', comments)
    res.status(200).json({
      success: true,
      total: comments.length,
      data: comments,
    });

  } catch (error) {
    next(error);
  }
};

export default getProductCommentControler;