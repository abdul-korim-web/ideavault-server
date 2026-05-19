import express from "express";
import cteateProductControler from "../Controlers/products/cteateProductControler.js";
import { checkProductData } from "../middelware/validator/checkProductData.js";
import checkLogin from './../middelware/checkLogin.js';
const productRoute = express.Router()


// insert projuct data 
productRoute.post('/',checkLogin,checkProductData,cteateProductControler)



export default productRoute