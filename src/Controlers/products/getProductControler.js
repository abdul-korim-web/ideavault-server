import IdeaModel from "../../Schema/productSchema.js";

const getProductControler = async (req, res, next) => {
  try {
    const allProduct = await IdeaModel.find();
    if (!allProduct || allProduct?.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "product not found", allProduct });
    }
    return res
      .status(200)
      .json({ success: true, message: "product found", allProduct });
  } catch (error) {
    next(error);
  }
};

export default getProductControler;
