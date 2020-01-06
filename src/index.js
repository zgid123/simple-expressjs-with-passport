require('babel-register');
require('module-alias/register');

const pg = require('pg');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');

dotenv.config({ path: path.join(__dirname, '../.env') });

const env = require('@config/env').default;
const passport = require('@config/passport').default;
const initialHbs = require('@config/initialHbs').default;
const initSequelize = require('@config/sequelize').default;
const initialRouter = require('@config/initialRouter').default;
// const initialAssociations = require('@config/associations').default;
const initGlobalVariables = require('@config/globalVariables').default;
const exceptionMiddleware = require('@middlewares/exceptionHandler').default;

const app = express();
const server = require('http').createServer(app);

pg.defaults.parseInt8 = true;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cookieParser());
app.use(session({ secret: 'hh' }));

initSequelize();
// initialAssociations(); // instead of this line, can view the other solution at src/config/globalVariables.js line 28
initGlobalVariables();
initialHbs(app);

app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  console.log(req.user);
  res.locals.user = req.user;
  next();
});

initialRouter(app);

app.use(exceptionMiddleware);

server.listen(env.port, () => {
  console.log(`Express server listening on port ${env.port}, in ${process.env.NODE_ENV} mode`);
});
