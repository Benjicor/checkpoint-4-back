const { connection } = require("../../db-connection");

class Events {
  static findOneById(id) {
    const sql = "SELECT * FROM events WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static findAll() {
    const sql = "SELECT * FROM events";
    return connection.promise().query(sql);
  }

  static createOne(events) {
    const sql = "INSERT INTO events SET ?";
    return connection.promise().query(sql, [events]);
  }

  static updateOneById(events, id) {
    const sql = "UPDATE events SET ? WHERE id=?";
    return connection.promise().query(sql, [events, id]);
  }

  static deleteOneById(id) {
    const sql = "DELETE FROM events WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Events;
