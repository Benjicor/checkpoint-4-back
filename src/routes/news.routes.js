const newsRouter = require("express").Router();

const { NewsController } = require("../controllers");

// GET
newsRouter.get("/:id", NewsController.findOneById);
newsRouter.get("/", NewsController.findAll);

// POST
newsRouter.post("/", NewsController.createOne);

// PUT
newsRouter.put("/:id", NewsController.updateOneById);

// DELETE
newsRouter.delete("/:id", NewsController.deleteOneById);

module.exports = newsRouter;
