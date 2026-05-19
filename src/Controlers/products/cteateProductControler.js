import { validationResult } from "express-validator";
import IdeaModel from './../../Schema/productSchema.js';
const cteateProductControler = async(req,res,next)=>{
    try {
        const validCheck = validationResult(req);
  if (!validCheck.isEmpty()) {
    return res
      .status(400)
      .json({ success: false, message: validCheck?.errors[0].msg });
  }
  const ideaData = {
    ...req.body,creator:req.payload
  }
    const newIdea = await IdeaModel.create(ideaData);
     return res.status(201).json({
      success: true,
      message: "Idea created successfully",
      data: newIdea,
    });
    } catch (error) {
        next(error)
    }
}

export default cteateProductControler