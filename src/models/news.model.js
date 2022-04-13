const { connection } = require("../../db-connection");

class News {
  static findOneById(id) {
    const sql = "SELECT * FROM news WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static createOne(news) {
    const sql = "INSERT INTO news SET ?";
    return connection.promise().query(sql, [news]);
  }

  static updateOneById(news, id) {
    const sql = "UPDATE news SET ? WHERE id=?";
    return connection.promise().query(sql, [news, id]);
  }

  static deleteOneById(id) {
    const sql = "DELETE FROM news WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = News;
