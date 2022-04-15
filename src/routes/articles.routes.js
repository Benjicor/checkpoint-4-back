const articlesRouter = require("express").Router();

const { ArticlesController } = require("../controllers");

// GET
articlesRouter.get("/", ArticlesController.findOneById);
articlesRouter.get("/", ArticlesController.findAll);

// POST
articlesRouter.post("/", ArticlesController.createOne);

// PUT
articlesRouter.put("/:id", ArticlesController.updateOneById);

// DELETE
articlesRouter.delete("/:id", ArticlesController.deleteOneById);

module.exports = articlesRouter;
