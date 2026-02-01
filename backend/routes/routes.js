const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server is up and running :)");
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "laura@gmail.com" && password === "12345678") {
    res.json({
      success: true,
      message: "Logged in successfully!",
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid username or password",
    });
  }
});

module.exports = router;
