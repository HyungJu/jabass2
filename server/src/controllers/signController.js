const bcrypt = require('bcrypt');
const connection = require('../services/mysql');

module.exports = {
  signOut: (req, res) => {
    req.logout();
    req.session.save(() => {
      res.send({ success: true });
    });
  },
  signUp: (req, res) => {
    const { id } = req.body;
    const { password } = req.body;
    const { name } = req.body;

    bcrypt.hash(password, 11, (err, hash) => {
      connection.query(
        'INSERT INTO `user` (id, password, name) VALUES (?, ?, ?)',
        [id, hash, name],
        (qErr) => {
          if (qErr) res.send({ success: false, isDuplicate: qErr.code === 'ER_DUP_ENTRY' });
          else res.send({ success: true });
        },
      );
    });
  },
  signInSuccess: (req, res) => {
    res.send({ user: req.user, success: true });
  },
  signInFail: (req, res) => {
    res.send({ user: null, success: false });
  },
};
