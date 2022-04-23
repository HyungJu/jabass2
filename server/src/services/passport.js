const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = (app, mysql) => {
  app.use(passport.initialize());
  app.use(passport.session());
  // 로그인 성공
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  // 이후 페이지 방문
  passport.deserializeUser((id, done) => {
    mysql.query(
      'SELECT * from user WHERE id=?',
      [id],
      (error, results) => {
        done(error, results[0]);
      },
    );
  });

  passport.use(new LocalStrategy(
    {
      usernameField: 'id',
      passwordField: 'password',
    },
    ((username, password, done) => {
      mysql.query(
        'SELECT * from user WHERE id=?',
        [username],
        (err, result) => {
          const user = result[0];
          if (err || result.length === 0) { return done(null, false, { message: 'username' }); }
          if (password === user.password) {
            return done(null, user);
          }
          if (bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          }
          return done(null, false, { message: 'password' });
        },
      );
    }),
  ));
  return passport;
};
