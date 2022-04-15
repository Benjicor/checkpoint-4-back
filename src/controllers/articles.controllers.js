const { Articles } = require("../models");

// Méthode qui permet de recuperer un article par son ID
const findOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const [[results]] = await Articles.findOneById(id);
    if (!results) return res.status(404).send();
    return res.json(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Méthode qui permet de recuperer tous les articles
const findAll = async (req, res) => {
  try {
    const [results] = await Articles.findAll();
    return res.json(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Méthode qui permet de créer un article
const createOne = async (req, res) => {
  try {
    const { title, src, link, description } = req.body;
    const [result] = await Articles.createOne({ title, src, link, description });
    const [[articlesCreated]] = await Articles.findOneById(result.insertId);
    return res.status(201).json({
      message: "Votre article a bien été créé",
      articles: articlesCreated,
    });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

// Méthode qui permet de mettre a jour les informations d'un article par son ID
const updateOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const articlesUpdate = req.body;
    await Articles.updateOneById(articlesUpdate, id);
    const [[articlesModified]] = await Articles.findOneById(id);
    return res.status(200).json({ message: "L'article a bien été modifié", articlesModified });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Méthode qui permet de supprimer un article par son ID
const deleteOneById = async (req, res) => {
  try {
    const [result] = await Articles.deleteOneById(req.params.id);
    if (!result.affectedRows) {
      return res.status(404).send();
    }
    return res.status(204).json({ message: "L'article a bien été supprimé" });
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
