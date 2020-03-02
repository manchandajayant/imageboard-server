const Image = require("./model");
const { Router } = require("express");

const router = new Router();

router.get("/images", async (req, res, next) => {
  try {
    const image = await Image.findAll({
      attributes: ["title", "url"],
      raw: true
    });
    res.send(image);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
