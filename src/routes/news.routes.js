const newsRouter = require("express").Router();

const { NewsController } = require("../controllers");

// GET
newsRouter.get("/", NewsController.findOneById);

// POST
newsRouter.post("/", NewsController.createOne);

// PUT
newsRouter.put("/:id", NewsController.updateOneById);

// DELETE
newsRouter.delete("/:id", NewsController.deleteOneById);

module.exports = newsRouter;
