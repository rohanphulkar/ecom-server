import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
});

const Banner = mongoose.model("Banner", bannerSchema);

export { Banner };
