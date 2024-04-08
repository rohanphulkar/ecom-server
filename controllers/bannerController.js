import { Banner } from "../models/Banner.js";

const AddBannerImage = async (req, res) => {
  try {
    const image = req.files;
    const { link } = req.body;
    if (link) {
      var banner = new Banner({
        image: image[0].path,
        link: link,
      });
    } else {
      var banner = new Banner({
        image: image[0].path,
      });
    }

    await banner.save();
    res.status(200).json({
      message: "Banner image added successfully",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const GetBannerImages = async (req, res) => {
  try {
    const banners = await Banner.find();
    res.status(200).json({
      banners,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

export { AddBannerImage, GetBannerImages };
