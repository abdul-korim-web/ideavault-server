import express from "express"
import checkLogin from './../middelware/checkLogin.js';
import createCommentControler from "../Controlers/comment/createCommentControler.js";
import { checkCommentData } from "../middelware/validator/checkCommentData.js";
import getProductCommentControler from "../Controlers/comment/getProductCommentControler.js";
import deleteProductCommentControler from "../Controlers/products/deleteProductCommentControler.js";
import getUserCommentControler from "../Controlers/products/getUserCommentControler.js";
import updateCommentControler from "../Controlers/comment/updateCommentControler.js";

export const commentRoute = express.Router()
// post a comment 
commentRoute.post("/",checkLogin,checkCommentData,createCommentControler)
// get user comment 
commentRoute.get("/mycomment",checkLogin,getUserCommentControler)
//  get idea product Comment 
commentRoute.get("/productcomment/:id",checkLogin,getProductCommentControler)
// delete comment
commentRoute.delete("/productcomment/:id",checkLogin,deleteProductCommentControler)
// update comment 
commentRoute.patch("/productcomment/:id",checkLogin,updateCommentControler)

