const { Router } = require("express");
const { Genre } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const allGenres = await Genre.findAll();
    res.status(200).send(allGenres);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
