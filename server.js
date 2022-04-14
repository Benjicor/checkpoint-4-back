require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mainRouter = require("./src/routes");
const { connection } = require("./db-connection");

const app = express();

// On configure cors pour autoriser uniquement le front à communiquer avec notre API
app.use(
  cors({
    origin: [process.env.CLIENT_ORIGIN],
    methods: "GET, POST, PUT, DELETE",
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Prefix all routes with /api
app.use("/api", mainRouter);

app.listen(process.env.PORT || 8000, (err) => {
  if (err) return console.log(err.message);
  console.log(`La connexion au serveur a réussi sur le port http://localhost:${process.env.PORT || 8000}`);

  // Test connexion to MYSQL DB
  connection.connect((err) => {
    if (err) return console.log(err.message);
    console.log(`La connexion MySQL à la base de données ${process.env.DB_NAME} de ${process.env.DB_USER} a réussi`);
  });
});

module.exports = app;
