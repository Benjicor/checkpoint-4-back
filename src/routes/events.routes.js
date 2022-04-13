const eventsRouter = require("express").Router();

const { EventsController } = require("../controllers");

// GET
eventsRouter.get("/", EventsController.findOneById);

// POST
eventsRouter.post("/", EventsController.createOne);

// PUT
eventsRouter.put("/:id", EventsController.updateOneById);

// DELETE
eventsRouter.delete("/:id", EventsController.deleteOneById);

module.exports = eventsRouter;