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

// ESTO FUE PARTE DE LA DEFENZA DE MI PROYECTO
// router.post("/", async (req, res) => {
//   try {
//     const { name } = req.body;
//     const nuevoGenero = await Genre.create({
//       name: name,
//     });
//     res.status(200).send(nuevoGenero);
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = router;
