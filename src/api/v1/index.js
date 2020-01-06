const express = require('express');

import passport from '@config/passport';

import signIn from './signIn';
import profile from './profile';

const router = express.Router();

router.post(
  '/signIn',
  passport.authenticate('local', { session: false }), // req.user
  signIn,
);

router.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  profile,
);

export default router;
