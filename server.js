require("dotenv").config();
const express = require("express");

const app = express();
const mainRouter = require("./src/routes");
const { connection } = require("./db-connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Prefix all routes with /api
app.use("/api", mainRouter);

app.listen(process.env.PORT || 8000, (err) => {
  if (err) return console.log(err.message);
  console.log(`La connexion au serveur a réussi: http://localhost:${process.env.PORT || 8000}`);
  // Test connexion to MYSQL DB
  connection.connect((err) => {
    if (err) return console.log(err.message);
    console.log(`La connexion a la base de donnée a réussi`);
  });
});

module.exports = app;
