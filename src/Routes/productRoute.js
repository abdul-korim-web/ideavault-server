import express from "express";
import cteateProductControler from "../Controlers/products/cteateProductControler.js";
import { checkProductData } from "../middelware/validator/checkProductData.js";
import checkLogin from './../middelware/checkLogin.js';
import getProductControler from "../Controlers/products/getProductControler.js";
import getHomeProductControler from "../Controlers/products/getHomeProductControler.js";
import getSingleProductControler from "../Controlers/products/getSingleProductControler.js";
const productRoute = express.Router()


// insert projuct data 
productRoute.post('/',checkLogin,checkProductData,cteateProductControler)
// get all product 
productRoute.get("/",getProductControler)
// get 6 data  
productRoute.get("/topdata",getHomeProductControler)
// get idea product by id  
productRoute.get("/:id",getSingleProductControler)



export default productRoute