const mainRouter = require("express").Router();
const newsRouter = require("./news.routes");

mainRouter.use("/news", newsRouter);

module.exports = mainRouter;
