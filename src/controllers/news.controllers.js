const { News } = require("../models");

// Méthode qui permet de recuperer une actualité par son ID
const findOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const [[results]] = await News.findOneById(id);
    if (!results) return res.status(404).send();
    return res.json(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Méthode qui permet de créer une actualité
const createOne = async (req, res) => {
  try {
    const { title, created_at, description } = req.body;
    const [result] = await News.createOne({ title, created_at, description });
    const [[newsCreated]] = await News.findOneById(result.insertId);
    return res.status(201).json({
      message: "Votre actualité à bien été créer",
      news: newsCreated,
    });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

// Méthode qui permet de mettre a jour les informations d'une actualité par son ID
const updateOneById = async (req, res) => {
  try {
    const { title, created_at, description } = req.body;
    await News.updateOneById({ title, created_at, description });
    const [[news]] = await News.findOneById(req.params.id);
    return res.status(200).json({ message: "L'actualité à bien été modifier", news });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Méthode qui permet de supprimer une actualité par son ID
const deleteOneById = async (req, res) => {
  try {
    const [result] = await News.deleteOneById(req.params.id);
    if (!result.affectedRows) {
      return res.status(404).send();
    }
    return res.status(204).json({ message: "L'actualité' à bien été supprimer" });
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
