const path = require('path');
const hbs = require('express-hbs');

export default (app) => {
  app.engine('hbs', hbs.express4({
    partialsDir: path.join(__dirname, '..', 'views', 'partials'),
    layoutsDir: path.join(__dirname, '..', 'views', 'layout'),
    defaultLayout: path.join(__dirname, '..', 'views', 'layout', 'default.hbs'),
  }));
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, '..', 'views'));

  return app;
};
