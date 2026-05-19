import { body } from "express-validator";

export const checkCommentData = [
  body("comment")
    .notEmpty()
    .withMessage("Comment is required")
    .isLength({ min: 2, max: 500 })
    .withMessage("Comment must be between 2 to 500 characters"),

  body("productId")
    .notEmpty()
    .withMessage("Product id is required")
    .isMongoId()
    .withMessage("Invalid product id"),
];