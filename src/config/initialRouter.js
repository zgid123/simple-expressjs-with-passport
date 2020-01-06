import apiV1Router from '../api/v1';
import controllersRouter from '../controllers';

export default (router) => {
  console.log('======= Initialize routers =======\n');

  // init req.locals
  router.use((req, _res, next) => {
    req.locals = {};

    next();
  });

  router.use('/api/v1', apiV1Router);
  router.use(controllersRouter);

  console.log('======= Complete initialize routers =======\n');

  return router;
};
