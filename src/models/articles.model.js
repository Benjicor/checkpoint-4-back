const { connection } = require("../../db-connection");

class Articles {
  static findOneById(id) {
    const sql = "SELECT * FROM articles WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static findAll() {
    const sql = "SELECT * FROM articles";
    return connection.promise().query(sql);
  }

  static createOne(articles) {
    const sql = "INSERT INTO articles SET ?";
    return connection.promise().query(sql, [articles]);
  }

  static updateOneById(articles, id) {
    const sql = "UPDATE articles SET ? WHERE id=?";
    return connection.promise().query(sql, [articles, id]);
  }

  static deleteOneById(id) {
    const sql = "DELETE FROM articles WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Articles;
