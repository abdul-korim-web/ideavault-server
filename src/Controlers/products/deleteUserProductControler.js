import IdeaModel from "../../Schema/productSchema.js";


const deleteUserProductControler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedIdea = await IdeaModel.findByIdAndDelete(id);

    if (!deletedIdea) {
      return res.status(404).json({
        success: false,
        message: "Idea not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Idea deleted successfully",
    });

  } catch (error) {
    next(error);
  }
};

export default deleteUserProductControler;