const mainRouter = require("express").Router();
const newsRouter = require("./news.routes");
const articlesRouter = require("./articles.routes");
const eventsRouter = require("./events.routes");
const emailRouter = require("./emails.routes");

mainRouter.use("/news", newsRouter);
mainRouter.use("/articles", articlesRouter);
mainRouter.use("/events", eventsRouter);
mainRouter.use("/emails", emailRouter);

module.exports = mainRouter;
