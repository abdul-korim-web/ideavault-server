import IdeaModel from "../../Schema/productSchema.js";

const getHomeProductControler = async(req,res,next)=>{
    try {
        const homeProduct = await IdeaModel.find().limit(6);
    if (!homeProduct || homeProduct?.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "product not found", homeProduct });
    }
    return res
      .status(200)
      .json({ success: true, message: "product found", limit:6, homeProduct });
    } catch (error) {
        next
        (error)
    }
}


export default getHomeProductControler