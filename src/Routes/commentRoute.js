import express from "express"
import checkLogin from './../middelware/checkLogin.js';
import createCommentControler from "../Controlers/comment/createCommentControler.js";
import { checkCommentData } from "../middelware/validator/checkCommentData.js";
import getProductCommentControler from "../Controlers/comment/getProductCommentControler.js";

export const commentRoute = express.Router()
// post a comment 
commentRoute.post("/",checkLogin,checkCommentData,createCommentControler)
//  get idea product Comment 
commentRoute.get("/productcomment/:id",checkLogin,getProductCommentControler)