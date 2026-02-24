import mongoose from "mongoose";

const jobProfileSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    job_code: {
      type: String,
    },

    description: {
      type: String, // store HTML from tiptap
      required: true,
    },

    department: {
      type: String,
      required: true,
    },

    employment_type: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Internship"],
      required: true,
    },

    experience_level: {
      type: String,
      enum: ["Fresher", "Mid", "Senior"],
      required: true,
    },

    experience_min_years: {
      type: Number,
    },

    experience_max_years: {
      type: Number,
    },

    salary_min: {
      type: Number,
    },

    salary_max: {
      type: Number,
    },

    salary_currency: {
      type: String,
      default: "INR",
    },

    salary_type: {
      type: String,
      enum: ["Monthly", "Yearly", "Hourly"],
    },

    is_salary_visible: {
      type: Boolean,
      default: true,
    },

    location_type: {
      type: String,
      enum: ["On-site", "Remote", "Hybrid"],
    },

    address: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("JobProfile", jobProfileSchema);