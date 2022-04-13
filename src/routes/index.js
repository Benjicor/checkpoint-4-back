const mainRouter = require("express").Router();
const newsRouter = require("./news.routes");
const articlesRouter = require("./articles.routes");
const eventsRouter = require("./events.routes");

mainRouter.use("/news", newsRouter);
mainRouter.use("/articles", articlesRouter);
mainRouter.use("/events", eventsRouter);

module.exports = mainRouter;
