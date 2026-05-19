import { validationResult } from "express-validator";
import CommentModel from "../../Schema/commentSchema.js";


const createCommentControler = async (req, res, next) => {
  try {
    const validCheck = validationResult(req);

    if (!validCheck.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: validCheck.array()[0].msg,
      });
    }

    const newComment = await CommentModel.create({
      comment: req.body.comment,
      productId: req.body.productId,

      creator: {
        id: req.payload.id,
        name: req.payload.name,
        email: req.payload.email,
        image: req.payload.image,
      },
    });

    res.status(201).json({
      success: true,
      message: "Comment added successfully",
      data: newComment,
    });

  } catch (error) {
    next(error);
  }
};

export default createCommentControler;