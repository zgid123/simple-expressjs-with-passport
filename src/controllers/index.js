const express = require('express');

import passport from '@config/passport';

import home from './home';
import signIn from './signIn';
import signUp from './signUp';

const router = express.Router();
router.use(passport.initialize());

router.get('/', home);
router.post(
  '/signIn',
  passport.authenticate('local', { session: true }),
  signIn,
);
router.post('/signUp', signUp);

router.get('/signOut', (req, res) => {
  req.logout();
  res.redirect('/');
});

export default router;
