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

// Méthode qui permet de recuperer tous les événements
const findAll = async (req, res) => {
  try {
    const [results] = await Events.findAll();
    return res.json(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Méthode qui permet de créer un événement
const createOne = async (req, res) => {
  try {
    const { title, src, link, location, event_date, description } = req.body;
    const [result] = await Events.createOne({ title, src, link, location, event_date, description });
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
    const { id } = req.params;
    const eventsUpdate = req.body;
    await Events.updateOneById(eventsUpdate, id);
    const [[eventsModified]] = await Events.findOneById(id);
    return res.status(200).json({ message: "L'événement a bien été modifié", eventsModified });
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
  findAll,
  createOne,
  updateOneById,
  deleteOneById,
};
