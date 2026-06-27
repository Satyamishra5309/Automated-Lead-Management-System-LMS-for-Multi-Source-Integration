import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String
    },

    phone: {
      type: String,
      required: true
    },

    source: {
      type: String,
      enum: [
        "website",
        "facebook",
        "instagram",
        "google"
      ],
      required: true
    },

    campaign: {
      type: String
    },

    status: {
      type: String,
      enum: [
        "new",
        "contacted",
        "converted",
        "lost"
      ],
      default: "new"
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },

  {
    timestamps: true
  }
);

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;