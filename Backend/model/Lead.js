import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({

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

  service: {
    type: String
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

  keyword: {
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
  type: String,
  default: "Unassigned"
},

  importedAt: {
    type: Date,

    default: Date.now
  }

}, {
  timestamps: true
});

const Lead =
  mongoose.model("Lead", leadSchema);

export default Lead;