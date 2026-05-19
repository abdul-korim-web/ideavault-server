import { body } from "express-validator";

export const checkProductData = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required"),

  body("shortDescription")
    .trim()
    .notEmpty()
    .withMessage("Short description is required"),
  body("detailedDescription")
    .trim()
    .notEmpty()
    .withMessage("Detailed description is required"),

  body("category")
    .trim()
    .notEmpty()
    .withMessage("Category is required"),

  body("tags")
    .optional()
    .isArray()
    .withMessage("Tags must be an array"),

  body("imageUrl")
    .trim()
    .notEmpty()
    .withMessage("Image URL is required")
    .isURL()
    .withMessage("Invalid image URL"),

  body("estimatedBudget")
    .optional()
    .trim(),

  body("targetAudience")
    .trim()
    .notEmpty()
    .withMessage("Target audience is required"),

  body("problemStatement")
    .trim()
    .notEmpty()
    .withMessage("Problem statement is required"),

  body("proposedSolution")
    .trim()
    .notEmpty()
    .withMessage("Proposed solution is required"),
];