const express = require("express");
const morgan = require("morgan");
const router = express.Router();

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes"));

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
