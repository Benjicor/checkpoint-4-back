require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mainRoutes = require("./routes");

const app = express();

// On configure cors pour autoriser uniquement le front à communiquer avec notre API
app.use(
  cors({
    origin: [process.env.CLIENT_ORIGIN],
    methods: "GET, POST, PUT, DELETE",
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ foo: "Salut Ben" });
});

app.use("/api", mainRoutes);

module.exports = app;
