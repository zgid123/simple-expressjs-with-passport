const passport = require('passport');
const passportJwt = require('passport-jwt');
const passportLocal = require('passport-local');

import { md5 } from '@utils/hash';

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
const LocalStrategy = passportLocal.Strategy;

const jwtOps = {
  secretOrKey: process.env.SECRET_KEY || 'test-key',
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

passport.use(new LocalStrategy(
  async (username, password, cb) => {
    try {
      const user = await global.models.User.findOne({
        where: {
          username,
          password: md5(password),
        },
        rejectOnEmpty: global.HttpError.unauthorized(),
      });

      return cb(null, user); // req.user = user
    } catch (err) {
      console.log(err);
      return cb('Invalid username or password.', false);
    }
  },
));

passport.use(new JwtStrategy(
  jwtOps,
  async (jwtPayload, done) => { // jwtPayload = { username: user.username, id: user.id }
    try {
      const user = await global.models.User.findOne({
        where: {
          id: jwtPayload.id,
        },
        rejectOnEmpty: global.HttpError.unauthorized(),
      });

      return done(null, user);
    } catch (err) {
      console.log(err);
      return done('Invalid session.', false);
    }
  },
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;
