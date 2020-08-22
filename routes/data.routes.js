const express = require("express");
const router = express.Router();
const data = require("../db");

/*GET ALL DATA*/
router.get("/", async (req, res) => {
  await data
    .getData()
    .then((data) => res.json(data))
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
});

/*INSERT NEW DATA*/
router.post("/", async (req, res) => {
  await data
    .addData(req.body)
    .then((post) =>
      res.status(201).json({
        message: `The data #${post.id} has been created`,
        content: post,
      })
    )
    .catch((err) => res.status(500).json({ message: err.message }));
});

/*DELETE DATA*/
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  await data
    .deleteData(id)
    .then((post) =>
      res.json({
        message: `The data #${id} has been deleted`,
      })
    )
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
