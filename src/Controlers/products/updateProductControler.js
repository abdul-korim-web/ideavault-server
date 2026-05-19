import IdeaModel from "../../Schema/productSchema.js";

const updateProductControler = async (req, res, next) => {
    console.log(`hit`);
  try {
    const { id } = req.params;

    const updatedIdea = await IdeaModel.findOneAndUpdate(
      {
        _id: id,
        "creator.id": req.payload.id, 
      },
      {
        $set: req.body,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedIdea) {
      return res.status(404).json({
        success: false,
        message: "Idea not found or unauthorized",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Idea updated successfully",
      data: updatedIdea,
    });

  } catch (error) {
    next(error);
  }
};

export default updateProductControler;