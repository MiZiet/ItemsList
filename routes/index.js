const express = require("express");
const router = express.Router();

router.use("/api/data", require("./data.routes"));

module.exports = router;
