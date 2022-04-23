const express = require('express');

const router = express.Router();
const controller = require('../controllers/signController');

module.exports = function (passport) {
  router.post(
    '/signin',
    passport.authenticate('local', {
      session: true,
      failureRedirect: '/users/signin/fail',
    }),
    controller.signInSuccess,
  );

  router.get('/signin/fail', controller.signInFail);

  router.get('/signout', controller.signOut);

  router.post('/signout', controller.signOut);

  router.post('/signup', controller.signUp);
  return router;
};
