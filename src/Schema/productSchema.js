import mongoose from "mongoose";

const ideaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },

    shortDescription: {
      type: String,
      required: true,
      trim: true,
    },

    detailedDescription: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
      enum: [
        "Tech",
        "Health",
        "AI",
        "Education",
        "Finance",
        "Travel",
        "Startup",
      ],
    },

    tags: {
      type: [String],
      default: [],
    },

    imageUrl: {
      type: String,
      required: true,
      trim: true,
    },

    estimatedBudget: {
      type: String,
      default: "N/A",
      trim: true,
    },

    targetAudience: {
      type: String,
      required: true,
      trim: true,
    },

    problemStatement: {
      type: String,
      required: true,
      trim: true,
    },

    proposedSolution: {
      type: String,
      required: true,
      trim: true,
    },

    creator: {
  id: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
  },

  emailVerified: {
    type: Boolean,
    default: false,
  },

  image: {
    type: String,
    default: "",
  },

  createdAt: {
    type: String,
  },

  updatedAt: {
    type: String,
  },
},
  },
  {
    timestamps: true,
  }
);

const IdeaModel =
  mongoose.models.Idea || mongoose.model("Idea", ideaSchema);

export default IdeaModel;