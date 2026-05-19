import IdeaModel from "../../Schema/productSchema.js";

const getUserProductControler = async (req, res, next) => {
  console.log(`hj`);
  try {
    const userId = req.payload.id;
    const userProduct = await IdeaModel.find({ "creator.id": userId });
    res.status(200).json({
      success: true,
      total: userProduct?.length,
      data: userProduct,
    });
  } catch (error) {
    next(error);
  }
};
export default getUserProductControler