const connection = require('../services/mysql');

module.exports = {
  init: (req, res) => {
    // TODO: team, teamUser, schedule 테이블 추가
    connection.query(`
        DROP TABLE IF EXISTS user;
        CREATE TABLE user
        (
            id       VARCHAR(64) PRIMARY KEY,
            password VARCHAR(64) NOT NULL,
            name     VARCHAR(32) NOT NULL
        );
    `, (err) => {
      if (err) {
        console.error(err.sqlMessage);
      }
      res.redirect('/');
    });
  },

};
