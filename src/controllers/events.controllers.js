const { Events } = require("../models");

// Méthode qui permet de recuperer un événement par son ID
const findOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const [[results]] = await Events.findOneById(id);
    if (!results) return res.status(404).send();
    return res.json(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Méthode qui permet de créer un événement
const createOne = async (req, res) => {
  try {
    const { title, src, link, location, created_at, event_date, description } = req.body;
    const [result] = await Events.createOne({ title, src, link, location, created_at, event_date, description });
    const [[eventsCreated]] = await Events.findOneById(result.insertId);
    return res.status(201).json({
      message: "Votre événement a bien été créé",
      events: eventsCreated,
    });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

// Méthode qui permet de mettre a jour les informations d'un événement par son ID
const updateOneById = async (req, res) => {
  try {
    const { title, src, link, location, created_at, event_date, description } = req.body;
    await Events.updateOneById({ title, src, link, location, created_at, event_date, description });
    const [[events]] = await Events.findOneById(req.params.id);
    return res.status(200).json({ message: "L'événement a bien été modifié", events });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Méthode qui permet de supprimer un événement par son ID
const deleteOneById = async (req, res) => {
  try {
    const [result] = await Events.deleteOneById(req.params.id);
    if (!result.affectedRows) {
      return res.status(404).send();
    }
    return res.status(204).json({ message: "L'événement a bien été supprimé" });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = {
  findOneById,
  createOne,
  updateOneById,
  deleteOneById,
};
