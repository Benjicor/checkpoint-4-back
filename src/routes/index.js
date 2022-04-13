const mainRouter = require("express").Router();
const newsRouter = require("./news.routes");
const articlesRouter = require("./articles.routes");

mainRouter.use("/news", newsRouter);
mainRouter.use("/articles", articlesRouter);

module.exports = mainRouter;
