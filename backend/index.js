const express = require("express");
const app = express();
const port = 4000 || process.env.PORT;
const cors = require("cors");
const { database } = require("./config/database");
const routes = require("./routes/routes");

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/", routes);

app.post("/register", (req, response) => {});

const dbConnect = database();

dbConnect.then(() => {
  app.listen(port, (req, res) => {
    console.log("Server is running on port http://localhost:" + port);
  });
});
